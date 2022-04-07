const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "featuresgithub",
    description : "Sends a link to the utility mod's GitHub.",
    async run(client, message, args) {
        const featuresgithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Other Features Mod\'s GitHub')
            .setURL('https://github.com/team-citicraft/Other-Features-Mod')
            .setAuthor('WynnKunGz')
            .setDescription('Other Features Mod\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(featuresgithub);
    }
}

console.log('FEATURESGITHUB command is ready!');