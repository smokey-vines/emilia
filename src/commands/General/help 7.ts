import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the Utils menu',
            category: 'general',
            aliases: ['h 7']
        })
    }

        run = async (M: ISimplifiedMessage): Promise<void> => {
            const buttons = [
              {
                buttonId: "help 8 ",
                buttonText: { displayText: `${this.client.config.prefix}help 8` },
                type: 1,
              },
              ];
            
              const buttonMessage: any = {
              contentText: `
              /n/n_*UTILS*_/n/n 
              ${this.client.config.prefix}blur
              ${this.client.config.prefix}circle
              ${this.client.config.prefix}getgif
              ${this.client.config.prefix}google
              ${this.client.config.prefix}retrieve
              ${this.client.config.prefix}screenshot
              ${this.client.config.prefix}steal
              ${this.client.config.prefix}stciker
              ${this.client.config.prefix}subreb
              ${this.client.config.prefix}translate
              ${this.client.config.prefix}wikipedia `,
              footerText: "🎇 Beyond 🎇",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
            
            };
          }
