"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({
    intents: [],
});
client.on("ready", (c) => { console.log(`Logged in as ${c.user.username}`); });
client.login(process.env.TOKEN);
