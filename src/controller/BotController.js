const _ = require('lodash')
const BotService = require('../service/BotService')
const { NOT_FOUND, prettify } = require('../phrases')

class BotController {
  async handle(bot) {
    bot.hears('Всі', async (ctx) => {
      const { firstPart, secondPart } = await BotService.getCountiesList()

      ctx.sendMessage(firstPart)
      setTimeout(() => ctx.sendMessage(secondPart), 100)
    })

    bot.on('text', async (ctx) => {
      const result = await BotService.findCountry(ctx.message.text)
      if (_.isEmpty(result)) return ctx.reply(NOT_FOUND)

      for (const resultElement of result) {
        ctx.sendMessage(prettify({ ...resultElement }))
      }
    })
  }
}

module.exports = new BotController()
