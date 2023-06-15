const { bot } = require("../core/bot");
const { Composer } = require("telegraf");
const message = require("../lib/message");
const keybords = require("../lib/keybords");
const composer = new Composer();

bot.start((ctx) => {
  ctx.reply(message.start, keybords.start);
});

composer.action("help", (ctx) => {
  ctx.editMessageText(message.help, { parse_mode: "HTML" });
});

bot.use(composer.middleware());
