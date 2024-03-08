const fs = require('node:fs');
const { Client, Collection, IntentsBitField } = require('discord.js');
const { createAudioPlayer, getVoiceConnection, NoSubscriberBehavior } = require('@discordjs/voice');
const { prefix } = require('./config.json');

const intents = new IntentsBitField();
intents.add(
	IntentsBitField.Flags.GuildMessages,
	IntentsBitField.Flags.Guilds,
	IntentsBitField.Flags.GuildVoiceStates,
	IntentsBitField.Flags.MessageContent,
)

const client = new Client({ intents: intents });
client.commands = new Collection();

const player = createAudioPlayer({
	behaviors: {
		noSubscriber: NoSubscriberBehavior.Stop,
	}
});


// Load the commands in commandFiles
const commandFiles = fs.readdirSync('./commands')
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Callbacks
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
	if (!message.content.startsWith(prefix)) return;

	// Get the command
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName);
	if (!command) return;

	// Execute the command
	try {
		await command.execute(message, player);
	}
	catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}

	// Delete the message
	let timeout = 0;
	if (commandName == 'help') timeout = 10000;
	setTimeout(() => {
		message.delete();
	}, timeout);
});


// Leave when channel empty
client.on('voiceStateUpdate', (oldVoiceState, newVoiceState) => {
	if (newVoiceState.channel === null && oldVoiceState.channel.members.size <= 1) {
		let connection = getVoiceConnection(newVoiceState.guild.id);
		if (connection) {
			connection.destroy();
		}
	}
});

client.login(process.env['DISCORD_TOKEN']);