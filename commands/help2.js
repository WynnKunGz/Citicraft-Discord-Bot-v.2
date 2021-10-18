const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "help2",
    description : "Help Command No.2",
    async run(client, messsage, args) {
        const help2 = new Discord.MessageEmbed()
        .setColor('#126180')
        .setTitle('Help!')
        .setAuthor('WynnKunGz')
        .setDescription('Commands List #2')
        .addFields(
            { name : '26. phctreesgithub', value : 'Pam\'s Harvest Craft : Trees Mod\'s GitHub'},
            { name : '27. ping', value : 'Ping Command'},
            { name : '28. scgithub', value : 'Security Craft Mod\'s GitHub'},
            { name : '29. stklibgithub', value : 'SteveKunG\'s Lib Mod\'s GitHub'},
            { name : '30. turtygithub', value : 'TurtyWurty\'s GitHub'},
            { name : '31. tutorials', value : 'Modding Tutorials'},
            { name : '32. vehiclegithub', value : 'Vehicle Mod\'s GitHub'},
            { name : '33. vehicletrello', value : 'Vehicle Mod\'s Trello Board'}
        )
        .setTimestamp()
        .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`)

        messsage.channel.send(help2);
    }
}

console.log('HELP2 command is ready!');