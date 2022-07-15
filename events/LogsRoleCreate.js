const client = require("../index");
const Discord = require('discord.js');

client.on("roleCreate", async (role) => {
    const fetchedLogs = await role.guild.fetchAuditLogs({
          limit: 1,
          type: 'ROLE_CREATE',
      });
    const fasdfa = fetchedLogs.entries.first();
      let { executor, target} = fasdfa;
    if(executor === null) executor = "\u200B";
    if(target === null) target = "\u200B";
  
      const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor({ name: executor.username, iconURL: executor.displayAvatarURL(), url: `https://discord.com/users/${executor.id}`})
        .setDescription("A new role was created!")
        .addFields(
          {name: "User", value: executor.username},
          {name: "Role Name", value: target.name},
          {name: "Role ID", value: target.id},
        )
        .setTimestamp();
        client.channels.cache.get(client.config.logs.role).send({embeds: [embed]});
  });