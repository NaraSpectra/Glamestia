const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on("message", (message) => {
  if(message.content === "Yo") {
    message.channel.send("plait ;)");
  }
});

bot.on('ready', function() {
    bot.user.setGame("Câliner Nara");
    console.log('Connected')
});

bot.login('NDAwNjI4NDYwOTc4MDQ0OTM4.DTeaJA.2V7bQv35bTPqEtmpqojaClGfXVM')
