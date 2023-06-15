const { Composer, Markup } = require("telegraf");
const { bot } = require("../core/bot");
const axios = require("axios");
const fuzzy = require("fuzzy");

const composer = new Composer();
const url =
  "https://raw.githubusercontent.com/denoland/dotland/main/data/showcase.json";

composer.on("inline_query", async ({ inlineQuery, answerInlineQuery }) => {
  return answerInlineQuery({
    type: "article",
    id: "someID",
    title: "someTitle",
    description: "someDesc",
    thumb_url: "img_url",
    url: "url",
  });
  // let results = [];
  // let indexation = 0;
  // let database = await axios.get(url).then((res) => res.data);
  // let packs = Object.keys(database).map((e) => e);
  // let simular = fuzzy.filter(inlineQuery.query, packs).sort().slice(0, 20);
  // let found = simular.map((e) => {
  //   return e.string;
  // });
  // for (const key of found) {
  //   let data = database[key];
  //   let repo = data["link"];
  //   let auth = data["title"];
  //   let deno = "https://deno.land/x/" + key;
  //   let github = repo;
  //
  //   let text = `<b>Package: </b> ${auth}/n
  //       <b>Title:</b> ${repo}`;
  //   const keyboard = Markup.inlineKeyboard(
  //     [Markup.button.url("Github", github), Markup.button.url("Deno", deno)],
  //     { columns: 2 }
  //   );
  //   let serializer = () => {
  //     const qualizer = {
  //       type: "Article",
  //       id: ++indexation,
  //       url: deno,
  //       title: repo,
  //       reply_markup: keyboard,
  //       input_message_content: {
  //         message_text: text,
  //         parse_mode: "HTML",
  //       },
  //     };
  //     results.push(qualizer);
  //     indexation += 1;
  //   };
  //   serializer();
  // }
  // return answerInlineQuery(results);
});

bot.use(composer.middleware());
