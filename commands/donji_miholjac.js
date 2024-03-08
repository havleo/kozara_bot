const { resolvePlay } = require("../utils.js");

module.exports = {
	name: 'donji_miholjac',
	async execute(message, audioPlayer) {
		await resolvePlay(message, audioPlayer, "s8.iqstreaming.com", ":8032/stream");
	},
};