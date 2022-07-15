const client = require("../index");
const Discord = require('discord.js');

client.on('messageDelete', async message => {
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	const deletionLog = fetchedLogs.entries.first();

	if (!deletionLog) return     client.channels.cache.get(client.config.logs.message).send({embeds: [new Discord.MessageEmbed({
    "author": {
      "name": message.author.tag,
      "url": "https://discord.com/users/" + message.author.id ,
      "icon_url": message.author.displayAvatarURL()
    },
    "color": 15483204,
    "description": "​\n" + message.content + "\n\n**Mention: <@" + message.author.id + ">\nChannel : <#" + message.channel.id + ">**"
})]})

	const { executor, target } = deletionLog;
  try{
	if (target.id == message.author.id) {
    client.channels.cache.get(client.config.logs.message).send({embeds: [new Discord.MessageEmbed({
      "author": {
        "name": message.author.tag,
        "url": "https://discord.com/users/" + message.author.id,
        "icon_url": message.author.displayAvatarURL()
      },
      "color": 15483204,
      "description": "​\n" + message.content + "\n\n**Mention: <@" + message.author.id + ">\nChannel : <#" + message.channel.id + ">**\n**From : <@" + executor.id + ">**"
    })]})
	} else {
    client.channels.cache.get(client.config.logs.message).send({embeds: [new Discord.MessageEmbed({
      "author": {
        "name": message.author.tag,
        "url": "https://discord.com/users/" + message.author.id ,
        "icon_url": message.author.displayAvatarURL()
      },
      "color": 15483204,
      "description": "​\n" + message.content + "\n\n**Mention: <@" + message.author.id + ">\nChannel : <#" + message.channel.id + ">**"
    })]})
	}
}catch{
  
}
});