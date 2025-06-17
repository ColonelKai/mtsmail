import "dotenv/config";
import { Events } from "discord.js";
await bot.register_commands();
bot.once(Events.ClientReady, (c) => { console.log(`Logged in as ${c.user.username}`); });
bot.login(process.env.TOKEN);
