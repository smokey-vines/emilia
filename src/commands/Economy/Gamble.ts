import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";
import { Sticker, Categories, StickerTypes } from "wa-sticker-formatter";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "gamble",
      description: "Test your gambling skill.",
      aliases: ["gamble"],
      category: "economy",
      usage: `${client.config.prefix}gamble <amount> [left/right] `,
      baseXp: 30,
    });
  }

  run = async (
    M: ISimplifiedMessage,
    { joined }: IParsedArgs
  ): Promise<void> => {
    if (M.from !== "120363022488307199@g.us")
      return void M.reply(
        `You can't gamble here. Use ${this.client.config.prefix}support to get casino group link.`
      );
    const time = 10;
      const cd = await (await this.client.getUser(M.sender.jid)).lastRob;
      if (time - (Date.now() - cd) > 0) {
        return void M.reply(
          `woah there slow down you can use this command after 10 secs`
        );
      }
    const user = M.sender.jid;
    const directions = ["left", "right"];
    const terms: any = joined.trim().split(" ");
    const wallet = await (await this.client.getUser(user)).wallet;
    const direction = directions[Math.floor(Math.random() * directions.length)];
    let gif!: string;
    if (direction === "left") {
      gif = "https://bestanimations.com/media/left/365059883left-arrow-18.gif";
    } else if (direction === "right") {
      gif =
        "https://p14cdn4static.sharpschool.com/UserFiles/Servers/Server_1584893/Image/Buttons/right-arrow-31.gif";
    }
    const amount: number = terms[0];
    const luck: string = terms[1].toLowerCase();
    if (isNaN(amount))
      return void M.reply(
        `🟥 *Invalid format. Usage Example - ${this.client.config.prefix}gamble 100 left*`
      );
    if (amount < 100)
      return void M.reply(`🟥 *You can't gamble gold less than 100.*`);
    if (amount > wallet)
      return void M.reply(
        `🟥 *You need ${
          amount - wallet
        } gold more to gamble with this amount of gold*.`
      );
    if (amount > 15000)
      return void M.reply(`🟥 *You can't gamble gold more than 15000.*`);
    if (!directions.includes(luck))
      return void M.reply(
        `🟥 *The direction should be left or right. Example - ${this.client.config.prefix}gamble ${amount} left.*`
      );
    if (luck !== direction) {
      await this.client.reduceGold(user, amount);
      const sticker: any = await new Sticker(gif, {
        pack: `${direction.toUpperCase()}`,
        author: `${direction.toUpperCase()}`,
        quality: 90,
        type: "full",
        categories: ["🎊"],
        background: "#0000ffff",
      });
      await M.reply(await sticker.build(), MessageType.sticker, Mimetype.webp);
      await M.reply(`📉 You lost *${amount} gold*.`);
    } else {
      await this.client.addGold(user, amount);
      const sticker: any = await new Sticker(gif, {
        pack: `${direction.toUpperCase()}`,
        author: `${direction.toUpperCase()}`,
        quality: 90,
        type: "full",
        categories: ["🎊"],
        background: "#0000ffff",
      });
      await M.reply(await sticker.build(), MessageType.sticker, Mimetype.webp);
      await M.reply(`📈 You won *${amount} gold*.`);
    }
  };
}
