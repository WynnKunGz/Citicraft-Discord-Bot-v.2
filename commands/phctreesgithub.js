const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "phctreesgithub",
 description : "Sends a link to Pam's Harvest Craft Trees' GitHub.",
 async run(client, message, args) {
     const phctreesgithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Pam\'s Harvest Craft : Trees Mod\'s GitHub')
     .setURL('https://github.com/MatrexsVigil/phc2trees')
     .setAuthor('WynnKunGz')
     .setDescription('Pam\'s Harvest Craft : Trees Mod\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(phctreesgithub);
    }
}

console.log('PHCTREESGITHUB command is ready!');