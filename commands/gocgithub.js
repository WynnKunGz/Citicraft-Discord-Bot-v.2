const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "gocgithub",
 description : "Sends a link to Good Ol' Currency Mod's GitHub.",
 async run(client, message, args) {
     const gocgithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Good Ol\' Currency Mod\'s GitHub')
     .setURL('https://github.com/Beardlessbrady/Currency-Mod')
     .setAuthor('WynnKunGz')
     .setDescription('Good Ol\' Currency Mod\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(gocgithub);
    }
}

console.log('GOCGITHUB command is ready!');