const { createAudioResource } = require("@discordjs/voice");
const { createVoiceChannel, getVoiceChannel } = require("../utils.js");

module.exports = {
	name: 'aktual',
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			const resource = createAudioResource("https://live.radio.si/Aktual");
			audioPlayer.play(resource);
			getVoiceChannel(message).subscribe(audioPlayer);
		}
	},
};