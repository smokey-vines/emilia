import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "wallet",
      description: "Displays user-wallet",
      category: "economy",
      usage: `${client.config.prefix}wallet`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const user = M.sender.jid;
    const result = await (await this.client.getUser(user)).wallet;
    await M.reply(`👛 *Wallet | ${M.sender.username}*\n\n🪙 *Gold: ${result}*`);
  };
}
