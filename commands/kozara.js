const { createAudioResource } = require("@discordjs/voice");
const { getVoiceChannel } = require("../utils.js");

module.exports = {
	name: 'kozara',
	async execute(message, audioPlayer) {
		if (!message.member.voice.channel) return;
		const channel = await getVoiceChannel(message);
		channel.subscribe(audioPlayer);
		audioPlayer.play(createAudioResource("http://51.254.61.148:11111/;"));
	},
};