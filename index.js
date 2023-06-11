/**
 * Discord bot that responds to messages sent by a user.
 * Proof of concept for future Discord bots.
 */
require('dotenv').config()

import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
  ] 
})

client.once('ready', () => {
  console.log('bot is online')
})

client.login(process.env.TOKEN)

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return
  }

  const reply = message.content.toLocaleLowerCase() === 'hello'
    ? 'hello'
    : 'greeting not found'

  message.channel.send(reply)
})