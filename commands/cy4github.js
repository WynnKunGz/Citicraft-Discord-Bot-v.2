const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "cy4github",
    description : "Sends a link to Cy4's GitHub.",
    async run(client, message, args) {
        const cy4github = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Cy4\'s GitHub')
            .setURL('https://github.com/Cy4Shot/ModdingTutorial1.16')
            .setAuthor('WynnKunGz')
            .setDescription('Cy4\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(cy4github);
    }
}

console.log('CY4GITHUB command is ready!');