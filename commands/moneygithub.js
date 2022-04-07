const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "moneygithub",
    description : "Sends a link to the money mod's GitHub.",
    async run(client, message, args) {
        const moneygithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Money Mod\'s GitHub')
            .setURL('https://github.com/team-citicraft/Money-Mod')
            .setAuthor('WynnKunGz')
            .setDescription('Money Mod\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(moneygithub);
    }
}

console.log('MONEYGITHUB command is ready!');