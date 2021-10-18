const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "cfvgithub",
 description : "Sends a link to Mr.Crayfish Vehicle Mod's GitHub.",
 async run(client, message, args) {
     const cfvgithub = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Mr.Crayfish\'s Vehicle Mod\'s GitHub')
     .setURL('https://github.com/MrCrayfish/MrCrayfishVehicleMod')
     .setAuthor('WynnKunGz')
     .setDescription('Mr.Crayfish\'s Vehicle Mod\'s GitHub')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(cfvgithub);
    }
}

console.log('CFVGITHUB command is ready!');