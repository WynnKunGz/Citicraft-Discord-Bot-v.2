const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "featurestrello",
 description : "Sends a link to the utility mod's trello board.",
 async run(client, message, args) {
     const featurestrello = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Other Features Mod\'s Trello Board')
     .setURL('https://trello.com/b/yr6zuxhS/citicraft-other-features')
     .setAuthor('WynnKunGz')
     .setDescription('Other Features Mod\'s Trello Board')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(featurestrello);
    }
}

console.log('FEATURESTRELLO command is ready!');