const { createAudioResource } = require("@discordjs/voice");
const { getVoiceChannel } = require("../utils.js");
const { resolve4 } = require("dns");

module.exports = {
	name: "extra",
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			resolve4("streams.extrafm.hr", (err, records) => {
				const resource = createAudioResource("http://" + records + ":8110/stream?2124");
				audioPlayer.play(resource);
				getVoiceChannel(message).subscribe(audioPlayer);
			});
		}
	},
};