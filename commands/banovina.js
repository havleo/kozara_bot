const { createAudioResource } = require("@discordjs/voice");
const { createVoiceChannel, getVoiceChannel } = require("../utils.js");

module.exports = {
	name: 'banovina',
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			const resource = createAudioResource("http://stream1.radio-banovina.hr:9998/;");
			audioPlayer.play(resource);
			getVoiceChannel(message).subscribe(audioPlayer);
		}
	},
};