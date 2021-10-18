const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "phccropsgithub",
 description : "Sends a link to Pam's Harvest Craft Crops' GitHub.",
 async run(client, message, args) {
     const phccropsgithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Pam\'s Harvest Craft : Crops Mod\'s GitHub')
     .setURL('https://github.com/MatrexsVigil/phc2crops')
     .setAuthor('WynnKunGz')
     .setDescription('Pam\'s Harvest Craft : Crops Mod\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(phccropsgithub);
    }
}

console.log('PHCCROPSGITHUB command is ready!');