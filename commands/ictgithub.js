const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "ictgithub",
    description : "Sends a link to Indicatia's GitHub.",
    async run(client, message, args) {
        const ictgithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Indicatia\'s GitHub')
            .setURL('https://github.com/SteveKunG/Indicatia/tree/1.16.5_forge')
            .setAuthor('WynnKunGz')
            .setDescription('Indicatia\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(ictgithub);
    }
}

console.log('ICTGITHUB command is ready!');