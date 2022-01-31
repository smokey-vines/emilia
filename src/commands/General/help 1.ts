import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the Econamy menu',
            category: 'general',
            aliases: ['h 1']
        })
    }

        run = async (M: ISimplifiedMessage): Promise<void> => {
            const buttons = [
              {
                buttonId: "help 2",
                buttonText: { displayText: `${this.client.config.prefix}help 2` },
                type: 1,
              },
              ];
            
              const buttonMessage: any = {
              contentText: `
              /n/n_*ECONAMY*_/n/n 
              ${this.client.config.prefix}slot
              ${this.client.config.prefix}gamble
              ${this.client.config.prefix}give
              ${this.client.config.prefix}bank
              ${this.client.config.prefix}rob
              ${this.client.config.prefix}wallet
              ${this.client.config.prefix}deposit
              ${this.client.config.prefix}withdraw
              ${this.client.config.prefix}daily `,
              footerText: "🎇 Beyond 🎇",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
            
            };
          }