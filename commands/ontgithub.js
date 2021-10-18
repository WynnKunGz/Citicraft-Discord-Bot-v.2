const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "ontgithub",
 description : "Sends a link to Originatia's GitHub.",
 async run(client, message, args) {
     const ontgithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Originatia\'s GitHub')
     .setURL('https://github.com/SteveKunG/Originatia/tree/1.16.5_forge')
     .setAuthor('WynnKunGz')
     .setDescription('Originatia\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(ontgithub);
    }
}

console.log('ONTGITHUB command is ready!');