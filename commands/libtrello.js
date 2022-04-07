const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "libtrello",
    description : "Sends a link to the library mod's trello board.",
    async run(client, message, args) {
        const libtrello = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Library Mod\'s Trello Board')
            .setURL('https://trello.com/b/lVLlSr3u/citicraft-lib')
            .setAuthor('WynnKunGz')
            .setDescription('Library Mod\'s Trello Board')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(libtrello);
    }
}

console.log('LIBTRELLO command is ready!');