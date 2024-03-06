const { createAudioResource } = require("@discordjs/voice");
const { createVoiceChannel, getVoiceChannel } = require("../utils.js");

module.exports = {
	name: 'BIR',
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			const resource = createAudioResource("http://188.40.62.20:8090/;");
			getVoiceChannel(message).subscribe(audioPlayer);
			audioPlayer.play(resource);
		}
	},
};