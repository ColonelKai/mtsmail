import { Client, Collection } from "discord.js";
import { command_registry } from "../commands/command_registry";
export class Bot extends Client {
    commands = new Collection();
    constructor(options) {
        super(options);
    }
    async register_commands() {
        const reg = command_registry; // we want to create a copy
        // lest we mute the members
        for (const cobj of reg) {
            this.commands.set(cobj.data.name, cobj);
        }
    }
}
