const client = require("../index");
const Discord = require('discord.js');

client.on("roleDelete", async (role) => {

    const fetchedLogs = await role.guild.fetchAuditLogs({
          limit: 1,
          type: 'ROLE_DELETE',
      });
  
    const fasdfa = await fetchedLogs.entries.first();
      let { executor, target} = fasdfa;
    if(executor === null) executor = "\u200B";
    if(target === null || target === undefined) target = "\u200B";
  
      const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor({ name: executor.username, iconURL: executor.displayAvatarURL(), url: `https://discord.com/users/${executor.id}`})
        .setDescription("A new role was Deleted!")
        .addFields(
          {name: "User", value: executor.username},
          {name: "Role Name", value: role.name},
          {name: "Role ID", value: role.id},
        )
        .setTimestamp();
        client.channels.cache.get(client.config.logs.role).send({embeds: [embed]});
  
  });