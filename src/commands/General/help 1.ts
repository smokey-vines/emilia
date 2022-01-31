import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help1',
            description: 'Displays the Econamy menu',
            category: 'general',
            aliases: ['h1']
        })
    }

        run = async (M: ISimplifiedMessage): Promise<void> => {
            const buttons = [
              {
                buttonId: "help2",
                buttonText: { displayText: `${this.client.config.prefix}help2` },
                type: 1,
              },
              ];
            
              const buttonMessage: any = {
              contentText: `_*🪙ECONOMY🪙*_\n\n🎊 ${this.client.config.prefix}slot\n\n🎊 ${this.client.config.prefix}gamble\n\n🎊 ${this.client.config.prefix}give\n\n🎊 ${this.client.config.prefix}bank\n\n🎊 ${this.client.config.prefix}rob\n\n🎊 ${this.client.config.prefix}wallet\n\n🎊 ${this.client.config.prefix}deposit\n\n🎊 ${this.client.config.prefix}withdraw\n\n🎊 ${this.client.config.prefix}daily `,
              footerText: "🎇 Beyond 🎇",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
            
            };
          }
