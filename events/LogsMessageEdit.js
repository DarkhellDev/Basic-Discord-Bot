const client = require("../index");
const Discord = require('discord.js');

client.on("messageUpdate", async (oldMessage, newMessage) => {
  try{
if(newMessage.author.bot) return
let channel = oldMessage.guild.channels.cache.get(client.config.logs.message)
const url = oldMessage.url
const embed = new Discord.MessageEmbed()
.setTitle(`Edited Message Logs`)
.setColor('#993366')
.setTimestamp()
.setURL(url)
.addField(`Old Message`, `*${oldMessage.content}*`, false)
.addField(`Final Message`, `*${newMessage.content}*`, false)
.addField(`Message Author`, `**<@${oldMessage.author.id}>**`, true)
.addField(`Channel`, `**<#${oldMessage.channel.id}>**`, true)
channel.send({embeds: [embed]});
  }catch{
      
  }
})