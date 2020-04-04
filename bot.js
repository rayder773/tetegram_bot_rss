const Telegraf = require('telegraf');
require('dotenv').config();

const {
  BOT_TOKEN
} = process.env;

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('hello')
})

bot.launch();
