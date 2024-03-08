const { getVoiceConnection, joinVoiceChannel, createAudioResource } = require("@discordjs/voice");
const { resolve4 } = require("dns");

const sleep = (ms) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
const getVoiceChannel = async (message) => {
	let connection = getVoiceConnection(message.member.voice.guild.id);
	if (!connection) {
		joinVoiceChannel({
			channelId: message.member.voice.channelId,
			guildId: message.member.voice.guild.id,
			adapterCreator: message.member.voice.guild.voiceAdapterCreator,
		});
		connection = getVoiceConnection(message.member.voice.guild.id);
		await sleep(3000);
	}
	return connection;
}

const resolvePlay = async (message, audioPlayer, domain, endpoint, protocol = "https") => {
	if (!message.member.voice.channel) return;

	resolve4(domain, async (err, records) => {
		const channel = await getVoiceChannel(message);
		channel.subscribe(audioPlayer);
		audioPlayer.play(createAudioResource(protocol + "://" + records + endpoint));
	});
}

module.exports = {
	getVoiceChannel,
	resolvePlay
};