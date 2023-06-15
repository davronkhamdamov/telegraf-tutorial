const { bot } = require("../core/bot");

bot.on("photo", (ctx) => {
  ctx.telegram
    .sendPhoto(ctx.from.id, ctx.message.photo[0].file_id)
    .then((r) => r);
  ctx.replyWithHTML("Qabul qilindi");
});
