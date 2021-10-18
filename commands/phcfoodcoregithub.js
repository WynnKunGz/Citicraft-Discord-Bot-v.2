const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "phcfoodcoregithub",
 description : "Sends a link to Pam's Harvest Craft Food Core's GitHub.",
 async run(client, message, args) {
     const phcfoodcoregithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Pam\'s Harvest Craft : Food Core Mod\'s GitHub')
     .setURL('https://github.com/MatrexsVigil/phc2foodcore-1.16.3')
     .setAuthor('WynnKunGz')
     .setDescription('Pam\'s Harvest Craft : Food Core Mod\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(phcfoodcoregithub);
    }
}

console.log('PHCFOODCOREGITHUB command is ready!');