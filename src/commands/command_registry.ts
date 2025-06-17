import { CommandInterface } from "classes/command"; 
// utility
import * as c_u_ping from "./utility/c_u_ping";


export const command_registry: CommandInterface[] = [
	// UTILITY
	new c_u_ping.command()
]
