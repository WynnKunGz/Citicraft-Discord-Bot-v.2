const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name: 'ping',
    description: 'Check the bot\'s ping',

    async run (client, message, args) {
        const ping = new Discord.MessageEmbed()
        .setColor('#a7f9f9')
        .setTitle('Pong!')
        .setAuthor('WynnKunGz')
        .setDescription(`🔴\`${Date.now() - message.createdTimestamp} ms\``)
        .setTimestamp()
        .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(ping);
    }
}

console.log('PING command is ready!');