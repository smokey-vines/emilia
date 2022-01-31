import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the General menu',
            category: 'general',
            aliases: ['h 3']
        })
    }

        run = async (M: ISimplifiedMessage): Promise<void> => {
            const buttons = [
              {
                buttonId: "help 4",
                buttonText: { displayText: `${this.client.config.prefix}help 4` },
                type: 1,
              },
              ];
            
              const buttonMessage: any = {
              contentText: `
              /n/n_*GENERAL*_/n/n 
              ${this.client.config.prefix}admins
              ${this.client.config.prefix}exp
              ${this.client.config.prefix}hi
              ${this.client.config.prefix}invitelink
              ${this.client.config.prefix}mods
              ${this.client.config.prefix}profile
              ${this.client.config.prefix}rank
              ${this.client.config.prefix}support `,
              footerText: "🎇 Beyond 🎇",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
            
            };
          }
