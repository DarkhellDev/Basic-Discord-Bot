const client = require("../index");

client.on('ready', async () => {
    let activities = [`Status #1`, `Status #2`,`Status #3`, `Status #4`, ],i = 0;

  setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"PLAYING"}), 2000) // Don't change possible buggs 🙂
});
