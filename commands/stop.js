const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
	name: 'stop',
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			let connection = getVoiceConnection(message.member.voice.guild.id);
			if (connection) {
				connection.destroy();
			}
		}
	},
};