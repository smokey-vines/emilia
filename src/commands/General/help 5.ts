import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help 5',
            description: 'Displays the Media menu',
            category: 'general',
            aliases: ['h 5']
        })
    }

        run = async (M: ISimplifiedMessage): Promise<void> => {
            const buttons = [
              {
                buttonId: "help 6 ",
                buttonText: { displayText: `${this.client.config.prefix}help 6` },
                type: 1,
              },
              ];
            
              const buttonMessage: any = {
              contentText: `
              /n/n_*MEDIA*_/n/n 
              ${this.client.config.prefix}lyrics
              ${this.client.config.prefix}spotify
              ${this.client.config.prefix}ytaudio
              ${this.client.config.prefix}ytsearch
              ${this.client.config.prefix}ytvideo `,
              footerText: "🎇 Beyond 🎇",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
            
            };
          }
