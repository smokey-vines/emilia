import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "bank",
      description: "Displays user-bank",
      category: "economy",
      usage: `${client.config.prefix}bank`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const user = M.sender.jid;
    const result = await (await this.client.getUser(user)).bank;
    await M.reply(`🏦 *Bank | ${M.sender.username}*\n\n🪙 *Gold: ${result}*`);
  };
}
