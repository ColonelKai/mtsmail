import "dotenv/config";
import { Client } from "discord.js";

const client = new Client({
    intents: [],
})

client.on("ready", (c) => {console.log(`Logged in as ${c.user.username}`);});

client.login(process.env.TOKEN)