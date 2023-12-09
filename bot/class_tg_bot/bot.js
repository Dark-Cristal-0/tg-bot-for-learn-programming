const Tg_bot = require("node-telegram-bot-api")
const bot_command = require("./bot_command")

class Tg_bot_me extends Tg_bot{
  constructor(token,option){
    super(token,option)
  }
}

const token = ""
const option = {
  polling:true
}

const bot = new Tg_bot_me(token,option)

bot.setMyCommands(bot_command)

module.exports = bot