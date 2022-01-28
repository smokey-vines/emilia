import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "slot",
      description: "Bet your gold here.",
      aliases: ["bet"],
      category: "economy",
      usage: `${client.config.prefix}bet <amount>`,
      baseXp: 30,
    });
  }

  run = async (
    M: ISimplifiedMessage,
    { joined }: IParsedArgs
  ): Promise<void> => {
    if (M.from !== "120363022488307199@g.us")
      return void M.reply(
        `You can't bet here. Use ${this.client.config.prefix}support to get casino group link.`
      );
    const user = M.sender.jid;
    const emojis = [
      "\t\t🌸 : 💮 : 🌸\n》 💮 : ☘ : 💮 《\n\t\t☘ : ☘ : 🌸",
      "\t\t☘ : ☘ : 🌸\n》 💮 : ☘ : 🌸 《\n\t\t🌸 : 💮 : 💮",
      "\t\t🌸 : 🌸 : ☘\n》 💮 : ☘ : ☘ 《\n\t\t💮 : 💮 : 🌸",
    ];
    const i = emojis[Math.floor(Math.random() * emojis.length)];
    const Emoji = [
      "\t\t🌸 : 💮 : 💮\n》 ☘ : ☘ : ☘ 《\n\t\t☘ : 🌸 : 🌸",
      "\t\t☘ : 🌸 : ☘\n》 💮 : 💮 : 💮 《\n\t\t☘ : 🌸 : 🌸",
      "\t\t💮 : ☘ : 💮\n》 🌸 : 🌸 : 🌸 《\n\t\t💮 : ☘ : ☘",
    ];
    const o = Emoji[Math.floor(Math.random() * Emoji.length)];
    const jack = [
      "\t\t🌸 : 🌸 : 🌸\n》 ☘ : ☘ : ☘ 《\n\t\t💮 : 💮 : 💮",
      "\t\t☘ : ☘ : ☘\n》 💮 : 💮 : 💮 《\n\t\t🌸 : 🌸 : 🌸",
      "\t\t💮 : 💮 : 💮\n》 🌸 : 🌸 : 🌸 《\n\t\t☘ : ☘ : ☘",
    ];
    const p = jack[Math.floor(Math.random() * jack.length)];
    const results = [
      "lose",
      "lose",
      "lose",
      "lose",
      "lose",
      "lose",
      "lose",
      "win",
      "win",
      "win",
      "jackpot",
    ];
    const z = results[Math.floor(Math.random() * results.length)];
    if (!joined)
      return void M.reply(
        `🟥 *Provide the amount of gold to bet. Usage Example - ${this.client.config.prefix}slot 100.*`
      );
    const wallet = await (await this.client.getUser(user)).wallet;
    const terms: any = joined.trim().split(" ");
    const amount = terms[0];
    if (isNaN(amount)) return void M.reply(`🟥 *It must be a number*.`);
    if (amount < 100)
      return void M.reply(`🟥 *You can't bet gold less than 100.*`);
    if (amount > wallet)
      return void M.reply(
        `🟥 *You need ${
          amount - wallet
        } gold in your wallet to bet with this amount>*`
      );
    if (amount > 20000)
      return void M.reply(`🟥 *You can't bet more than 20000 gold*.`);
    const head = `🎰 *SLOT MACHINE* 🎰`;
    if (z === "lose") {
      await this.client.reduceGold(user, amount);
      const text = `${head}\n\n${i}\n\n📉 You lost *${amount} gold*.`;
      await M.reply(text);
    } else if (z === "win") {
      const i = Math.floor(Math.random() * 5) + 1;
      const gold = amount * i;
      await this.client.addGold(user, gold);
      const text = `${head}\n\n${o}\n\n📈 You won *${gold} gold*.`;
      await M.reply(text);
    } else {
      const gold = amount * 10;
      await this.client.addGold(user, gold);
      const text = `${head}\n\n${p}\n\n🎊 *Jackpot!* You won *${gold} gold*.`;
      await M.reply(text);
    }
  };
}
