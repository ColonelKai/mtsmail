import { SlashCommandBuilder, CommandInteraction, Client, MessageFlags } from 'discord.js';
import { CommandInterface } from "classes/command";

export class command implements CommandInterface {
	// DATA
	data = new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong, and informs you of the client ping!');
	// EXECUTE
	async execute(interaction: CommandInteraction): Promise<void> {
		await interaction.reply({ content: `Pong! Ping: ${global.bot.ws.ping}.`, flags: MessageFlags.Ephemeral });
	}
}

