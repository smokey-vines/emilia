import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help 6',
            description: 'Displays the Moderation menu',
            category: 'general',
            aliases: ['h 6']
        })
    }

        run = async (M: ISimplifiedMessage): Promise<void> => {
            const buttons = [
              {
                buttonId: "help 7 ",
                buttonText: { displayText: `${this.client.config.prefix}help 7` },
                type: 1,
              },
              ];
            
              const buttonMessage: any = {
              contentText: `
              /n/n_*MODERATION*_/n/n 
              ${this.client.config.prefix}activate
              ${this.client.config.prefix}close
              ${this.client.config.prefix}deactivate
              ${this.client.config.prefix}delete
              ${this.client.config.prefix}groupchange
              ${this.client.config.prefix}open
              ${this.client.config.prefix}promote
              ${this.client.config.prefix}purge
              ${this.client.config.prefix}remove
              ${this.client.config.prefix}revoke `,
              footerText: "🎇 Beyond 🎇",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
            
            };
          }
