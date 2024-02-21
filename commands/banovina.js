const { createAudioResource } = require("@discordjs/voice");
const { getVoiceChannel } = require("../utils.js");
const { resolve4 } = require("dns");

module.exports = {
	name: "banovina",
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			resolve4("audio.radio-banovina.hr", (err, records) => {
				const resource = createAudioResource("https://" + records + ":9998/stream");
				audioPlayer.play(resource);
				getVoiceChannel(message).subscribe(audioPlayer);
			})
		}
	},
};