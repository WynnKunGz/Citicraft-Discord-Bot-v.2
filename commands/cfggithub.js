const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "cfggithub",
    description : "Sends a link to Mr.Crayfish Gun Mod's GitHub.",
    async run(client, message, args) {
        const cfggithub = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Mr.Crayfish\'s Gun Mod\'s GitHub')
            .setURL('https://github.com/MrCrayfish/MrCrayfishGunMod')
            setAuthor('WynnKunGz')
            .setDescription('Mr.Crayfish\'s Gun Mod\'s GitHub')
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(cfggithub);
    }
}

console.log('CFGGITHUB command is ready!');