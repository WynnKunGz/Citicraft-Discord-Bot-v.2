const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "mkngithub",
 description : "Sends a link to Mekanism's GitHub.",
 async run(client, message, args) {
     const mkngithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Mekanism\'s GitHub')
     .setURL('https://github.com/mekanism/Mekanism')
     .setAuthor('WynnKunGz')
     .setDescription('Mekanism\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(mkngithub);
    }
}

console.log('MKNGITHUB command is ready!');