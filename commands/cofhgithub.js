const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "cofhgithub",
    description : "Sends a link to Team CoFH's GitHub.",
    async run(client, message, args) {
        const cofhgithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Team COFH\'s GitHub')
            .setURL('https://github.com/CoFH')
            .setAuthor('WynnKunGz')
            .setDescription('Team COFH\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(cofhgithub);
    }
}

console.log('COFHGITHUB command is ready!');