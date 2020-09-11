require('dotenv').config();

const schedule = require('node-schedule');
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    
    console.info(`Logged in as ${bot.user.tag}!`);
    init();
})

const init = ()=>{

    const cron = schedule.scheduleJob('*/59 12 * * 4',()=>{
        bot.channels.cache.get('CHANNEL ID')
        .send(`@everyone Já baixou seu joguinho lá na EPIC GAMES? 
        \n**entre no site:**  https://www.epicgames.com/store/pt-BR/free-games`);
    })
}


