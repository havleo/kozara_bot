const { createAudioResource } = require("@discordjs/voice");
const { getVoiceChannel } = require("../utils.js");
const { resolve4 } = require("dns");

module.exports = {
	name: "aktual",
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			resolve4("live.radio.si", (err, records) => {
				const resource = createAudioResource("https://" + records + "/Aktual");
				audioPlayer.play(resource);
				getVoiceChannel(message).subscribe(audioPlayer);
			});
		}
	},
};