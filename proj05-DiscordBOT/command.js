const dotenv = require('dotenv');
const path = require('path');
const { REST, Routes } = require('dicord.js');

dotenv.config({ path: path.resolve(__dirname, '.env.dev') });


const command = [
    {
        name: "ping",
        description: "Replies with Pong!"
    },
];

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID),
            { body: command },
        );

        console.log("Successfully reloaded apllication (/) commands.");
    } catch (error) {
        console.log(error);
    }
})();

const rest = new REST({ version: "10"}).setToken(process.env.TOKEN);