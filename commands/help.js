const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "help",
    description : "Help Command No.1",
    async run(client, message, args) {
        const help = new Discord.MessageEmbed()
            .setColor('#00a8a8')
            .setTitle('Help!')
            .setAuthor('WynnKunGz')
            .setDescription('Commands List #1')
            .addFields(
                { name : '1. blockgithub', value : 'Block Mod\'s GitHub', inline : true},
                { name : '2. blockstrello', value : 'Block Mod\'s Trello Board', inline : true},
                { name : '3. btngithub', value : 'Botania\'s GitHub', inline : true},
                { name : '4. cfggithub', value : 'Mr.Crayfish\'s Gun Mod\'s GitHub', inline : true},
                { name : '5. cfvgithub', value : 'Mr.Crayfish\'s Vehicle Mod\'s GitHub', inline : true},
                { name : '6. cofhgithub', value : 'Team COFH\'s GitHub', inline : true},
                { name : '7. cy4github', value : 'Cy4\'s GitHub', inline : true},
                { name : '8. dmmgithub', value : 'Dipo\'s Money Mod\'s GitHub', inline : true},
                { name : '9. featuresgithub', value : 'Other Features Mod\'s GitHub', inline : true},
                { name : '10. featurestrello', value : 'Other Features Mod\'s Trello Board', inline : true},
                { name : '11. gcgithub', value : 'Galacticraft\'s GitHub', inline : true},
                { name : '12. gocgihub', value : 'Good Ol\' Currency Mod\'s GitHub', inline : true},
                { name : '13. ictgithub', value : 'Indicatia\'s GitHub', inline : true},
                { name : '14. iegithub', value : 'Immersive Engineering\'s GitHub', inline : true},
                { name : '15. lazy', value : 'Online Data Generators', inline : true},
                { name : '16. libtrello', value : 'Library Mod\'s GitHub', inline : true},
                { name : '17. mkngithub', value : 'Mekanism\'s GitHub', inline : true},
                { name : '18. moneygithub', value : 'Money Mod\'s GitHub', inline : true},
                { name : '19. moneytrello', value : 'Money Mod\'s Trello Board', inline : true},
                { name : '20. mpgithub', value : 'More Planets Mod\'s GitHub', inline : true},
                { name : '21. mvgithub', value : 'More Villagers Mod\'s GitHub', inline : true},
                { name : '22. ontgithub', value : 'Originatia\'s GitHub', inline : true},
                { name : '23. phccropsgithub', value : 'Pam\'s Harvest Craft : Crops Mod\'s GitHub', inline : true},
                { name : '24. phcfoodcoregithub', value : 'Pam\'s Harvest Craft : Food Core Mod\'s GitHub', inline : true},
                { name : '25. phcfoodextendedgithub', value : 'Pam\'s Harvest Craft : Food Extended Mod\'s GitHub', inline : true}
            )
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(help);
    }
}

console.log('HELP command is ready!');