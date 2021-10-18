const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "phcfoodextendedgithub",
 description : "Sends a link to Pam's Harvest Craft Food Extended's GitHub.",
 async run(client, message, args) {
     const phcfoodextendedgithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Pam\'s Harvest Craft : Food Extended Mod\'s GitHub')
     .setURL('https://github.com/MatrexsVigil/phc2foodextended-1.16.3')
     .setAuthor('WynnKunGz')
     .setDescription('Pam\'s Harvest Craft : Food Extended Mod\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(phcfoodextendedgithub);
    }
}

console.log('PHCFOODEXTENDEDGITHUB command is ready!');