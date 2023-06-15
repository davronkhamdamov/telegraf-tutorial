const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.token);

bot.launch().then();

module.exports = { bot };
