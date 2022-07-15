const client = require("../index");
const Discord = require('discord.js');
const moment = require('moment');

client.on('guildMemberAdd', async (member, message) => {
    if(member.user.bot) return;
    member.roles.add(member.guild.roles.cache.get(client.config.server.roles.members));
    const channel = member.guild.channels.cache.get(client.config.logs.welcome)
    if(channel){
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL(), url: "https://discord.com/users/" + member.user.id })
        .setDescription(` \`\`\` Join \`\`\` \n**Register**: \`${moment(member.user.createdAt).format("MMM Do YYYY").toLocaleString()}\`\n**Mention:** <@!${member.user.id}>`)
        .setColor("GREEN")
       channel.send({embeds: [embed]})
    } 
  })