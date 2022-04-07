const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
    name : "lazy",
    description : "Sends links to data generators.",
    async run(client, message, args) {
        const lazy = new Discord.MessageEmbed()
            .setColor('#54fbfb')
            .setTitle('Online Data Generators!')
            .setAuthor('WynnKunGz')
            .setDescription('Online Data Generators')
            .addFields(
                { name : 'Loot Tables', value : 'https://misode.github.io/loot-table/', inline : true},
                { name : 'Predicates', value : 'https://misode.github.io/predicate/', inline : true},
                { name : 'Advancements', value : 'https://misode.github.io/advancement/', inline : true},
                { name : 'Recipes', value : 'https://misode.github.io/recipe/', inline : true},
                { name : 'World Gen', value : 'https://misode.github.io/worldgen/', inline : true}
            )
            .setTimestamp()
            .setFooter(`Citicraft Discord Bot | Version ${version} | By WynnKunGz`);

        message.channel.send(lazy);
    }
}

console.log('LAZY command is ready!');