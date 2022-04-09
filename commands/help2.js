const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "help2",
    description : "Help Command No.2",
    async run(client, messsage, args) {
        const help2 = new Discord.MessageEmbed()
        .setColor('#00a8a8')
        .setTitle('Help!')
        .setAuthor('WynnKunGz')
        .setDescription('Commands List #2')
        .addFields(
            { name : '26. phctreesgithub', value : 'Pam\'s Harvest Craft : Trees Mod\'s GitHub', inline : true},
            { name : '27. ping', value : 'Ping Command', inline : true},
            { name : '28. scgithub', value : 'Security Craft Mod\'s GitHub', inline : true},
            { name : '29. stklibgithub', value : 'SteveKunG\'s Lib Mod\'s GitHub', inline : true},
            { name : '30. turtygithub', value : 'TurtyWurty\'s GitHub', inline : true},
            { name : '31. tutorials', value : 'Modding Tutorials', inline : true},
            { name : '32. vehiclegithub', value : 'Vehicle Mod\'s GitHub', inline : true},
            { name : '33. vehicletrello', value : 'Vehicle Mod\'s Trello Board', inline : true},
            { name : '34. java', value : 'Information about Java Versions', inline : true},
            { name : '35. serverinfo', value : 'Server Information', inline : true}
        )
        .setTimestamp()
        .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`)

        messsage.channel.send(help2);
    }
}

console.log('HELP2 command is ready!');