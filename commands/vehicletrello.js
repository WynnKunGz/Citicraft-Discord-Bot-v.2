const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "vehicletrello",
 description : "Sends a link to the vehicle mod's trello board.",
 async run(client, message, args) {
     const vehicletrello = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Vehicle Mod\'s Trello Board')
     .setURL('https://trello.com/b/uAEV4eRz/citicraft-vehicles')
     .setAuthor('WynnKunGz')
     .setDescription('Vehicle Mod\'s Trello Board')
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(vehicletrello);
    }
}

console.log('VEHICLETRELLO command is ready!');