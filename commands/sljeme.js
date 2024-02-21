const { createAudioResource } = require("@discordjs/voice");
const { createVoiceChannel, getVoiceChannel } = require("../utils.js");
const { resolve4 } = require("dns");

module.exports = {
	name: 'sljeme',
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			resolve4("25433.live.streamtheworld.com", (err, records) => {
				const resource = createAudioResource("https://" + records + "/SLJEME.mp3");
				audioPlayer.play(resource);
				getVoiceChannel(message).subscribe(audioPlayer);
			});
		}
	},
};