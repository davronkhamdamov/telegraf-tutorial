const axios = require("axios");
const { bot } = require("../core/bot");
const { Composer, Markup } = require("telegraf");
const composer = new Composer();

const url =
  "https://raw.githubusercontent.com/davronkhamdamov/quiz-app/master/.gitignore";
composer.command("std", async (ctx) => {
  let versions = [];
  let keybords = [];
  let data = await axios.get(url).then((res) => res.data);
  for (let version of data) {
    keybords.push([
      Markup.button.url(version, "http://google.com/search?=" + version),
    ]);
  }
  ctx.reply("Choose version from the list:", Markup.inlineKeyboard(keybords));
});

bot.use(composer.middleware());
