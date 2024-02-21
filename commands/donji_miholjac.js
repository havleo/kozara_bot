const { execute } = require("../utils.js");

module.exports = {
	name: 'donji_miholjac',
	async execute(message, audioPlayer) {
		execute(message, audioPlayer, "s8.iqstreaming.com", ":8032/stream");
	},
};