const client = require("../index");

/// Members
client.on('ready', async () => {
    const guild = client.guilds.cache.get(client.config.server.id);
    setInterval(() =>{
        const memberCount = guild.memberCount
        const channel = guild.channels.cache.get(client.config.counting.members);
        channel.setName(`『👥』𝐌𝐞𝐦𝐛𝐞𝐫𝐬: ${memberCount.toLocaleString()}`).catch()
    }, 60000);

///Boosts
    setInterval(() =>{
      const serverBoostCounter = guild.premiumSubscriptionCount;
      const channel = guild.channels.cache.get(client.config.counting.boosts);
      channel.setName(`『🚀』𝐁𝐨𝐨𝐬𝐭𝐬: ${serverBoostCounter.toLocaleString()}`);
    }, 60000);
  
  });