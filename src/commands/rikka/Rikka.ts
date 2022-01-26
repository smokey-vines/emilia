/** @format */

import { MessageType } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "rikka",
			description:
				"gives pics of rikka.",
			aliases: ["ri", "rk", "rip"],
			category: "rikka",
			dm: true,
			usage: `${client.config.prefix}rikka`,
			modsOnly: true,
			baseXp:10,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined)
			return void (await M.reply(`Please provide the Broadcast Message.`));
		const term = joined.trim();
		const images = [
			"https://wallpapercave.com/wp/wp3144753.jpg",
			"https://wallpapercave.com/wp/wp4782018.jpg",
			"https://wallpaperaccess.com/full/1326836.jpg",
			"https://wallpapermemory.com/uploads/711/chitoge-kirisaki-wallpaper-full-hd-323316.jpg",
			"https://data.whicdn.com/images/304776416/original.jpg",
			"https://i.pinimg.com/564x/ca/e7/8a/cae78ad7f8e6459ad20bde350e2eb78b.jpg",
		];
		const selected = images[Math.floor(Math.random() * images.length)];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	 {
        return void this.client.sendMessage(
			M.from,
			{ url: chitoge }, MessageType.image, {
				caption: `there you go`,
				
			});
     }
    }
}
