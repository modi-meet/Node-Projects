const dotenv = require('dotenv');
const path = require('path');
const { Client, GatewayIntentBits, InteractionCallback } = require('discord.js');

dotenv.config({ path: path.resolve(__dirname, '.env') });



const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent]
})

client.on('messageCreate', (message) => {
    // console.log(message.content)
    if(message.author.bot) return;
    if(message.content.startsWith('create')) {
        const url = message.content.split("create")[1];

        return message.reply({
            content: "Generating Short ID for " + url,
        });
    }

    message.reply({
        content: "Hii from Bot!",
    })
});

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
    interaction.reply('PONG!');
});



client.login(process.env.TOKEN);