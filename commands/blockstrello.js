const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "blockstrello",
 description : "Sends a link to the block mod's trello board.",
 async run(client, message, args) {
     const blockstrello = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Block Mod\'s Trello Board')
     .setURL('https://trello.com/b/7EPKorS4/citicraft-building-blocks')
     .setAuthor('WynnKunGz')
     .setDescription('Block Mod\'s Trello Board')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(blockstrello);
    }
}

console.log('BLOCKSTRELLO command is ready!');