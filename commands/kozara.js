const { createAudioResource } = require("@discordjs/voice");
const { createVoiceChannel, getVoiceChannel } = require("../utils.js");

module.exports = {
	name: 'kozara',
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			const resource = createAudioResource("http://51.254.61.148:11111/;");
			getVoiceChannel(message).subscribe(audioPlayer);
			audioPlayer.play(resource);
		}
	},
};