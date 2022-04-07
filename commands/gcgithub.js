const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "gcgithub",
    description : "Sends a link to Galacticraft's GitHub.",
    async run(client, message, args) {
        const gcgithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Galacticraft\'s GitHub')
            .setURL('https://github.com/TeamGalacticraft/Galacticraft')
            .setAuthor('WynnKunGz')
            .setDescription('Galacticraft\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(gcgithub);
    }
}

console.log('GCGITHUB command is ready!');