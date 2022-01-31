import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help 4',
            description: 'Displays the Educative menu',
            category: 'general',
            usage: `${client.config.prefix}help 2 (command_name)`,
            dm: true,
            aliases: ['h 4']
        })
    }

        run = async (M: ISimplifiedMessage): Promise<void> => {
            const buttons = [
              {
                buttonId: "help 5 ",
                buttonText: { displayText: `${this.client.config.prefix}help 5` },
                type: 1,
              },
              ];
            
              const buttonMessage: any = {
              contentText: `
              /n/n_*EDUCATIVE*_/n/n 
              ${this.client.config.prefix}Calcular
              ${this.client.config.prefix}crypto
              ${this.client.config.prefix}elemant
              ${this.client.config.prefix}trivia
              ${this.client.config.prefix}urbandictionary
              ${this.client.config.prefix}weather `,
              footerText: "🎇 Beyond 🎇",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
            
            };
          }
