const { createAudioResource } = require("@discordjs/voice");
const { getVoiceChannel } = require("../utils.js");

module.exports = {
	name: 'bir',
	async execute(message, audioPlayer) {
		if (!message.member.voice.channel) return;
		const channel = await getVoiceChannel(message);
		channel.subscribe(audioPlayer);
		audioPlayer.play(createAudioResource("http://188.40.62.20:8090/;"));
	},
};