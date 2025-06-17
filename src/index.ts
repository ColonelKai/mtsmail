import "dotenv/config";
import { Events, Interaction, MessageFlags } from "discord.js";
import { Bot } from "classes/bot";

global.bot = new Bot({ intents: [] });

global.bot.on(Events.InteractionCreate, async (interaction: Interaction) => {
	if (!interaction.isChatInputCommand()) return;
	const command = global.bot.commands.get(interaction.commandName);
	if (!command) {
		console.error(`No command matching ${interaction.commandName}.`);
		return;
	}
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({
				content: "There was an MTS-sided error while executing this command. Please contact an MTS staff member.",
				flags: MessageFlags.Ephemeral
			})
		} else {
			await interaction.reply({
				content: "There was an MTS-sided error while executing this command. Please contact an MTS staff member.",
				flags: MessageFlags.Ephemeral
			})
		}
	}

})

global.bot.once(Events.ClientReady, (c) => {
	console.log(`Logged in as ${c.user.username}`);
	bot.register_commands();
});

global.bot.login(process.env.TOKEN)
