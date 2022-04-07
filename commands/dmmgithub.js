const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "dmmgithub",
    description : "Sends a link to Dipo's Money Mod's GitHub.",
    async run(client, message, args) {
        const dmmgithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Dipo\'s Money Mod\'s GitHub')
            .setURL('https://github.com/D1P0/DipoMoneyMod')
            .setAuthor('WynnKunGz')
            .setDescription('Dipo\'s Money Mod\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(dmmgithub);
    }
}

console.log('DMMGITHUB command is ready!');