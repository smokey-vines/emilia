import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help 2',
            description: 'Displays the Fun menu',
            category: 'general',
            aliases: ['h 2']
        })
    }

        run = async (M: ISimplifiedMessage): Promise<void> => {
            const buttons = [
              {
                buttonId: "help 3",
                buttonText: { displayText: `${this.client.config.prefix}help 3` },
                type: 1,
              },
              ];
            
              const buttonMessage: any = {
              contentText: `
              /n/n_*fun*_/n/n 
              ${this.client.config.prefix}fact
              ${this.client.config.prefix}jail
              ${this.client.config.prefix}joke
              ${this.client.config.prefix}quote
              ${this.client.config.prefix}rip
              ${this.client.config.prefix}react
              ${this.client.config.prefix}ship
              ${this.client.config.prefix}trash
              ${this.client.config.prefix}trigger
              ${this.client.config.prefix}marry
              ${this.client.config.prefix}wanted
              ${this.client.config.prefix}why
              ${this.client.config.prefix}chat `,
              footerText: "🎇 Beyond 🎇",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
            
            };
          }
