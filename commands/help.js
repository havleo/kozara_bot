const fs = require('fs');
const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	execute(message) {
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
		const commands = [];
		commandFiles.forEach(file => {
			if (file === 'help.js'
				|| file === 'sraka.js'
				|| file === 'stop.js') return;
			commands.push('?' + file.substring(0, file.length - 3));
		});
		message.reply(`while you are in a voice channel please use one of this commands: \n"${commands.join('",\n"')}".\nTo stop listening simply use the '${prefix}stop' command.`);
	},
};
