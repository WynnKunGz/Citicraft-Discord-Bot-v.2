const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "mvgithub",
    description : "Sends a link to More Villagers Mod's GitHub.",
    async run(client, message, args) {
        const mvgithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('More Villagers Mod\'s GitHub')
            .setURL('https://github.com/samedifferent/morevillagers')
            .setAuthor('WynnKunGz')
            .setDescription('More Villagers Mod\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);
    
        message.channel.send(mvgithub);
    }
}

console.log('MVGITHUB command is ready!');