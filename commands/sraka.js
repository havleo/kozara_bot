const { createAudioResource } = require("@discordjs/voice");
const { getVoiceChannel } = require("../utils.js");
const { resolve4 } = require("dns");

module.exports = {
	name: "sraka",
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			resolve4("sraka.siradiostream.net", (err, records) => {
				const resource = createAudioResource("https://" + records);
				audioPlayer.play(resource);
				getVoiceChannel(message).subscribe(audioPlayer);
			});
		}
	},
};