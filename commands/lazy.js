const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
 name : "lazy",
 description : "Sends links to data generators.",
 async run(client, message, args) {
     const lazy = new Discord.MessageEmbed()
     .setColor('#a7f9f9')
     .setTitle('Online Data Generators!')
     .setAuthor('WynnKunGz')
     .setDescription('Online Data Generators')
     .addFields(
         { name : 'Loot Tables', value : 'https://misode.github.io/loot-table/'},
         { name : 'Predicates', value : 'https://misode.github.io/predicate/'},
         { name : 'Advancements', value : 'https://misode.github.io/advancement/'},
         { name : 'Recipes', value : 'https://misode.github.io/recipe/'},
         { name : 'World Gen', value : 'https://misode.github.io/worldgen/'}
     )
     .setTimestamp()
     .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

     message.channel.send(lazy);
    }
}

console.log('LAZY command is ready!');