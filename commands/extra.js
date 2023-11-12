const { createAudioResource } = require("@discordjs/voice");
const { createVoiceChannel, getVoiceChannel } = require("../utils.js");

module.exports = {
	name: 'extra',
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			const resource = createAudioResource("http://streams.extrafm.hr:8110/");
			audioPlayer.play(resource);
			getVoiceChannel(message).subscribe(audioPlayer);
		}
	},
};