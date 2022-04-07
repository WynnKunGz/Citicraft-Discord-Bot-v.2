const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "iegithub",
    description : "Sends a link to Immersive Engineering's GitHub.",
    async run(client, message, args) {
        const iegithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Immersive Engineering\'s GitHub')
            .setURL('https://github.com/BluSunrize/ImmersiveEngineering')
            .setAuthor('WynnKunGz')
            .setDescription('Immersive Engineering\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(iegithub);
    }
}

console.log('IEGITHUB command is ready!');