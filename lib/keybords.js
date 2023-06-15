const { Markup } = require("telegraf");

const keybords = {
  start: Markup.inlineKeyboard([
    Markup.button.callback("Komandalarni ko'rsatish", "help"),
  ]),
};
module.exports = keybords;
