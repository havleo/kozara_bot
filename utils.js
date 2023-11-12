const { getVoiceConnection, joinVoiceChannel } = require("@discordjs/voice");

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
	}
}