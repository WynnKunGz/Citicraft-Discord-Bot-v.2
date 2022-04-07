const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "turtygithub",
    description : "Sends a link to TurtyWurty's GitHub.",
    async run(client, message, args) {
        const turtygithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('TurtyWurty\'s GitHub')
            .setURL('https://github.com/DaRealTurtyWurty/1.16-Tutorial-Mod')
            .setAuthor('WynnKunGz')
            .setDescription('TurtyWurty\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(turtygithub);
    }
}

console.log('TURTYGITHUB command is ready!');