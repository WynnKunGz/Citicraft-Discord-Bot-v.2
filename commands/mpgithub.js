const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "mpgithub",
    description : "Sends a link to More Planets Mod's GitHub.",
    async run(client, message, args) {
        const mpgithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('More Planets Mod\'s GitHub')
            .setURL('https://github.com/SteveKunG/MorePlanets')
            .setAuthor('WynnKunGz')
            .setDescription('More Planets Mod\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(mpgithub);
    }
}

console.log('MPGITHUB command is ready!');