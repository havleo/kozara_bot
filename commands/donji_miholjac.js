const { createAudioResource } = require("@discordjs/voice");
const { getVoiceChannel } = require("../utils.js");
const { resolve4 } = require("dns");

module.exports = {
	name: 'donji_miholjac',
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			resolve4("s8.iqstreaming.com", (err, records) => {
				const resource = createAudioResource("https://" + records + ":8032/stream");
				audioPlayer.play(resource);
				getVoiceChannel(message).subscribe(audioPlayer);
			});
		}
	},
};