const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "btngithub",
 description : "Sends a link to Botania's GitHub.",
 async run(client, message, args) {
     const btngithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Botania\'s GitHub')
     .setURL('https://github.com/Vazkii/Botania')
     .setAuthor('WynnKunGz')
     .setDescription('Botania\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(btngithub);
    }
}

console.log('BTNGITHUB command is ready!');