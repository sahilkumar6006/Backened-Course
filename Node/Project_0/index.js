//t.me/sahil_Developer_bot
//6782065447:AAGnKsLXQqdwhffYfmCnygb3vd070CY34Sk
const { Telegraf } = require('telegraf');


const bot = new Telegraf('6782065447:AAGnKsLXQqdwhffYfmCnygb3vd070CY34Sk');
bot.start(ctx => ctx.reply('welcome to sahil bot'));
bot.command('whomadethis', (ctx) => ctx.reply('this is made by sahil'));
bot.on('sticker', (ctx) => ctx.reply('😍'));
bot.launch();

