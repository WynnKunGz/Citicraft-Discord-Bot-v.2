const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "stklibgithub",
 description : "Sends a link to SteveKunG Lib's GitHub.",
 async run(client, message, args) {
     const stklibgithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('SteveKunG\'s Lib Mod\'s GitHub')
     .setURL('https://github.com/SteveKunG/SteveKunG-Lib/tree/1.16.5_forge')
     .setAuthor('WynnKunGz')
     .setDescription('SteveKunG\'s Lib Mod\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(stklibgithub);
    }
}

console.log('STKLIBGITHUB command is ready!');