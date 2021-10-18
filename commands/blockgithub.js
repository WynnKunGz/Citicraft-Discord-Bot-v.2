const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "blockgithub",
 description : "Sends a link to the block mod's GitHub.",
 async run(client, message, args) {
     const blockgithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Block Mod\'s GitHub')
     .setURL('https://github.com/team-citicraft/Block-Mod')
     .setAuthor('WynnKunGz')
     .setDescription('Block Mod\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(blockgithub);
    }
}

console.log('BLOCKGITHUB command is ready!');