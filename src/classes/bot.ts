import { REST, Routes, Client, ClientOptions, Collection } from "discord.js"
import "dotenv/config";
import { CommandInterface } from "../classes/command"
import { command_registry } from "../commands/command_registry"


export class Bot extends Client {
	commands: Collection<String, CommandInterface> = new Collection();

	constructor(options: ClientOptions) {
		super(options);

	}

	async register_commands() {
		const reg: CommandInterface[] = command_registry; // we want to create a copy
		// lest we mute the members
		for (const cobj of reg) {
			this.commands.set(cobj.data.name, cobj);
		}
		const rest: REST = new REST().setToken(process.env.TOKEN);

		(async () => {
			try {
				console.log(`Started refreshing ${reg.length} slash commands.`);

				const data = reg.map((c) => c.data.toJSON());

				const returned_data = await rest.put(
					Routes.applicationCommands(process.env.CLIENT_ID),
					{ body: data }
				)

				console.log(`Returned data from registering slash commands: ${returned_data.length}`)


			} catch (error) { console.error(error) }
		})()
	}
}	
