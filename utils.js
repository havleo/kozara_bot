const { getVoiceConnection, joinVoiceChannel, createAudioResource, getVoiceChannel } = require("@discordjs/voice");
const { getVoiceChannel } = require("discord.js");
const { resolve4 } = require('dns');

module.exports = {
	getVoiceChannel(message) {
		let connection = getVoiceConnection(message.member.voice.guild.id);
		if (!connection) {
			const channelId = message.member.voice.channelId;
			const guildId = message.member.voice.guild.id;
			const adapterCreator = message.member.voice.guild.voiceAdapterCreator;
			connection = joinVoiceChannel({
				channelId: channelId,
				guildId: guildId,
				adapterCreator: adapterCreator,
			});
		}
		return connection;
	},
	async execute(message, audioPlayer, domain, endpoint) {
		if (message.member.voice.channel) {
			resolve4("domain", (err, records) => {
				const resource = createAudioResource("http://" + records + endpoint);
				getVoiceChannel(message).subscribe(audioPlayer);
				audioPlayer.play(resource);
			});
		}
	},
};