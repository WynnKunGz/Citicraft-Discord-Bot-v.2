const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "moneytrello",
 description : "Sends a link to the money mod's trello board.",
 async run(client, message, args) {
     const moneytrello = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Money Mod\'s Trello Board')
     .setURL('https://trello.com/b/iFQEndx4/citicraft-money')
     .setAuthor('WynnKunGz')
     .setDescription('Money Mod\'s Trello Board')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(moneytrello);
    }
}

console.log('MONEYTRELLO command is ready!');