const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "tutorials",
    description : "Sends links to modding tutorials.",
    async run(client, message, args) {
        const tutorials = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Modding Tutorials')
            .setAuthor('WynnKunGz')
            .setDescription('Modding Tutorials')
            .addFields(
                { name : '1. Cy4\'s Tutorials', value : 'https://www.youtube.com/channel/UCJIDXtGpf4wv1ybDzdTA_vQ', inline : true},
                { name : '2. Mr.Pineapple\'s Tutorials', value : 'https://www.youtube.com/channel/UCT_Og2B8WwDPwnXr0FxMIeg', inline : true},
                { name : '3. TurtyWurty\'s Tutorials', value : 'https://www.youtube.com/channel/UCicAXLV4w2X6bn2EuM4To4w', inline : true},
                { name : '4. Luke\'s Tutorials', value : 'https://mc.lukegrahamlandry.ca/', inline : true},
                { name : '5. Multi-Texturing Blocks', value : 'https://mcmodhelp.fandom.com/wiki/Multi-Texturing_Blocks', inline : true},
                { name : '6. Item Tags', value : 'https://minecraft.fandom.com/wiki/Tag#Item_Tags', inline : true}
            )
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(tutorials);
    }
}

console.log('TUTORIALS command is ready!');