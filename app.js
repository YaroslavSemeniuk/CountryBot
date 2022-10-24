require('dotenv').config()
const { Telegraf } = require('telegraf')
const { START_MESSAGE } = require('./src/phrases')
const { connectDB } = require('./src/db/connectDB')
const BotController = require('./src/controller/BotController')

const bot = new Telegraf(process.env.BOT_TOKEN)

const start = async () => {
  await connectDB()
  bot.start((ctx) => ctx.reply(START_MESSAGE))
  await BotController.handle(bot)
  bot.startPolling()
}

start()
