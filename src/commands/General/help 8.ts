import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help 9',
            description: 'Displays the Weeb menu',
            category: 'general',
            aliases: ['h 8']
        })
    }

        run = async (M: ISimplifiedMessage): Promise<void> => {
            const buttons = [
              {
                buttonId: "help 9 ",
                buttonText: { displayText: `${this.client.config.prefix}help 9` },
                type: 1,
              },
              ];
            
              const buttonMessage: any = {
              contentText: `
              /n/n_*weeb*_/n/n 
              ${this.client.config.prefix}anime
              ${this.client.config.prefix}animepaper
              ${this.client.config.prefix}animequote
              ${this.client.config.prefix}animeme
              ${this.client.config.prefix}character
              ${this.client.config.prefix}characterid
              ${this.client.config.prefix}genshincharacter
              ${this.client.config.prefix}haigusha
              ${this.client.config.prefix}kitsune
              ${this.client.config.prefix}loli
              ${this.client.config.prefix}manga
              ${this.client.config.prefix}neko
              ${this.client.config.prefix}pokemon
              ${this.client.config.prefix}rpaper
              ${this.client.config.prefix}saice
              ${this.client.config.prefix}vtuber
              ${this.client.config.prefix}waifu
              ${this.client.config.prefix}wallpaper `,
              footerText: "🎇 Beyond 🎇",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
            
            };
          }
