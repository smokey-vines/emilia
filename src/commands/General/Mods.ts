import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'mods',
            description: "Displays the Moderators' contact info",
            category: 'general',
            usage: `${client.config.prefix}mods`,
            aliases: ['moderators', 'mod', 'owner']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!this.client.config.mods || !this.client.config.mods[0]) return void M.reply('*[UNMODERATED]*')
        const filteredMap = this.client.config.mods.map((mod) => this.client.getUser(mod)).filter((user) => user)
        let text = '🎆Beyond owners🎆\n\n'
        filteredMap.forEach(
            (user, index) =>
                (text += `#${index + 1}\n🎉 *Username: ${
                    user.notify || user.vname || user.name || 'null'
                }*\n @${user.split("@")[0]}\n\n`)
        )
        text += `\n 💖EMILIA💖`
        return void M.reply(text)
    }
}
