const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
      name : 'serverinfo',
      description : 'Sends the server\'s basic information',

      async run (client, message, args) {
            const serverinfo = new Discord.MessageEmbed()
            .setColor('#5454fb')
            .setTitle('Server Information')
            .setAuthor('WynnKunGz')
            .setDescription('Citicraft\'s Server Information')
            .addFields(
                  { name : 'Server Name', value : `${message.guild.name}`},
                  { name : 'Total Members', value : `${message.guild.memberCount}`}
            )
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

            message.channel,send(serverinfo);
      }
}

console.log('SERVERINFO command is ready!');