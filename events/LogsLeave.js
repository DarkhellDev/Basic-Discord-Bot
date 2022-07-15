const client = require("../index");
const Discord = require('discord.js');
const moment = require('moment');

client.on("guildMemberRemove", async(member) =>{
    if(member.user.bot) return;
const channel = member.guild.channels.cache.get(client.config.logs.leave)
        if(channel){
      const embed = new Discord.MessageEmbed()
      .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL(), url: "https://discord.com/users/" + member.user.id })
      .setDescription(` \`\`\` Leave \`\`\` \n**Register**: \`${moment(member.user.createdAt).format("MMM Do YYYY").toLocaleString()}\`\n**Mention:** <@!${member.user.id}>\n**Join:** \`${moment(member.user.joinedAt).format("MMM Do YYYY").toLocaleString()}\``)
      .setColor("RED")
      channel.send({embeds: [embed]})
      }
    })