/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "emilia",
			description: "sends pics of emilia",
			category: "emilia",
			usage: `${client.config.prefix}emilia`,
			baseXp: 10,
			dm: true,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const images = [
			"https://wallpapercave.com/wp/wp9322872.jpg",
			"https://wallpapercave.com/wp/wp5978950.jpg",
			"https://wallpapercave.com/wp/wp9322904.jpg",
			"https://wallpapercave.com/wp/wp9322910.jpg",
			"https://wallpapercave.com/wp/wp9322918.jpg",
			"https://wallpapercave.com/wp/wp9322925.jpg",
		        "https://wallpapercave.com/wp/wp9323033.jpg",
		        "https://wallpapercave.com/wp/wp9323042.jpg",
		        "https://wallpapercave.com/wp/wp9323064.jpg",
		        "https://wallpapercave.com/wp/wp9323161.jpg",
		        "https://wallpapercave.com/wp/wp9323183.jpg",
		        "https://wallpapercave.com/wp/wp9323195.jpg",
		        "https://wallpapercave.com/wp/wp9323310.jpg",
		        "https://wallpapercave.com/wp/wp9323325.jpg",
		];
		const selected = images[Math.floor(Math.random() * images.length)];
		const text = `*💖THERE YOU GO💖*\n\n`;
			this.client.sendMessage( M.from, { url: selected }, MessageType.image, {
				caption: `${text}`,
			}
		);
	};
}
