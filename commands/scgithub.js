const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "scgithub",
 description : "Sends a link to Security Craft Mod's GitHub.",
 async run(client, message, args) {
     const scgithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Security Craft Mod\'s GitHub')
     .setURL('https://github.com/Geforce132/SecurityCraft')
     .setAuthor('WynnKunGz')
     .setDescription('Security Craft Mod\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(scgithub);
    }
}

console.log('SCGITHUB command is ready!');