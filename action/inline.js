const { bot } = require("../core/bot");
const { Markup } = require("telegraf");
bot.command("inline", (ctx) => {
  const replyMarkup = Markup.inlineKeyboard([
    Markup.button.callback("Call back button", "inline"),
  ]);
  ctx.reply("Test callback btn", replyMarkup).then((r) => r);
});

bot.action("inline", (ctx) => {
  ctx.deleteMessage();
});
