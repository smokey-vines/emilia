/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "rikka",
			description: "sends pics of rikka",
			category: "rikka",
			usage: `${client.config.prefix}rikka`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const images = [
			"https://wallpapercave.com/wp/wp5937284.jpg",
			"https://wallpapercave.com/wp/wp8410014.jpg",
			"https://wallpapercave.com/wp/wp8410043.jpg",
			"https://wallpapercave.com/wp/wp8410048.jpg",
			"https://wallpapercave.com/wp/wp5937347.jpg",
			"https://wallpapercave.com/wp/wp8410073.jpg",
		];
		const selected = images[Math.floor(Math.random() * images.length)];
		const text = `*🎉THERE YOU GO🎉*\n\n`;
			this.client.sendMessage( M.from, { url: selected }, MessageType.image, {
				caption: `${text}`,
			}
		);
	};
}
