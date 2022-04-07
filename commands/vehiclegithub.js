const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "vehiclegithub",
    description : "Sends a link to the vehicle mod's GitHub.",
    async run(client, message, args) {
        const vehiclegithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Vehicle Mod\'s GitHub')
            .setURL('https://github.com/team-citicraft/Vehicle-Mod')
            .setAuthor('WynnKunGz')
            .setDescription('Vehicle Mod\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`)

        message.channel.send(vehiclegithub);
    }
}

console.log('VEHICLEGITHUB command is ready!');