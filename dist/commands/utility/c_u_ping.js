import { SlashCommandBuilder } from 'discord.js';
export class command {
    // DATA
    data = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!');
    // EXECUTE
    async execute(interaction) {
        await interaction.reply(`Pong! Ping: ${interaction.client.ws.ping}ms`);
    }
}
