const { createAudioResource } = require("@discordjs/voice");
const { createVoiceChannel, getVoiceChannel } = require("../utils.js");

module.exports = {
	name: 'sraka',
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			const resource = createAudioResource("http://193.105.67.24:8006/");
			audioPlayer.play(resource);
			getVoiceChannel(message).subscribe(audioPlayer);
		}
	},
};