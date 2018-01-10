const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function() {
    bot.user.setGame("Stalk my master");
    console.log('Connected')
});

bot.login('Mzk5OTI4OTc3NjkyNTU3MzIy.DTduwg.yllGyCI8HulOTLGWMHQeDC9_-Vg')
