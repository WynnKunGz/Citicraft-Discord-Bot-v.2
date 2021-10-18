const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "help",
 description : "Help Command No.1",
 async run(client, message, args) {
     const help = new Discord.MessageEmbed()
     .setColor('#126180')
     .setTitle('Help!')
     .setAuthor('WynnKunGz')
     .setDescription('Commands List #1')
     .addFields(
        { name : '1. blockgithub', value : 'Block Mod\'s GitHub'},
        { name : '2. blockstrello', value : 'Block Mod\'s Trello Board'},
        { name : '3. btngithub', value : 'Botania\'s GitHub'},
        { name : '4. cfggithub', value : 'Mr.Crayfish\'s Gun Mod\'s GitHub'},
        { name : '5. cfvgithub', value : 'Mr.Crayfish\'s Vehicle Mod\'s GitHub'},
        { name : '6. cofhgithub', value : 'Team COFH\'s GitHub'},
        { name : '7. cy4github', value : 'Cy4\'s GitHub'},
        { name : '8. dmmgithub', value : 'Dipo\'s Money Mod\'s GitHub'},
        { name : '9. featuresgithub', value : 'Other Features Mod\'s GitHub'},
        { name : '10. featurestrello', value : 'Other Features Mod\'s Trello Board'},
        { name : '11. gcgithub', value : 'Galacticraft\'s GitHub'},
        { name : '12. gocgihub', value : 'Good Ol\' Currency Mod\'s GitHub'},
        { name : '13. ictgithub', value : 'Indicatia\'s GitHub'},
        { name : '14. iegithub', value : 'Immersive Engineering\'s GitHub'},
        { name : '15. lazy', value : 'Online Data Generators'},
        { name : '16. libtrello', value : 'Library Mod\'s GitHub'},
        { name : '17. mkngithub', value : 'Mekanism\'s GitHub'},
        { name : '18. moneygithub', value : 'Money Mod\'s GitHub'},
        { name : '19. moneytrello', value : 'Money Mod\'s Trello Board'},
        { name : '20. mpgithub', value : 'More Planets Mod\'s GitHub'},
        { name : '21. mvgithub', value : 'More Villagers Mod\'s GitHub'},
        { name : '22. ontgithub', value : 'Originatia\'s GitHub'},
        { name : '23. phccropsgithub', value : 'Pam\'s Harvest Craft : Crops Mod\'s GitHub'},
        { name : '24. phcfoodcoregithub', value : 'Pam\'s Harvest Craft : Food Core Mod\'s GitHub'},
        { name : '25. phcfoodextendedgithub', value : 'Pam\'s Harvest Craft : Food Extended Mod\'s GitHub'}
     )
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(help);
    }
}

console.log('HELP command is ready!');