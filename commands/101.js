const { createAudioResource } = require("@discordjs/voice");
const { getVoiceChannel } = require("../utils.js");
const { resolve4 } = require("dns");

module.exports = {
	name: "101",
	async execute(message, audioPlayer) {
		if (message.member.voice.channel) {
			resolve4("live.radio101.hr", (err, records) => {
				const resource = createAudioResource("https://" + records + ":9531/;");
				audioPlayer.play(resource);
				getVoiceChannel(message).subscribe(audioPlayer);
			});
		};
	},
};