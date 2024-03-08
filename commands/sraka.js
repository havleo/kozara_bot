const { resolvePlay } = require("../utils.js");

module.exports = {
	name: "sraka",
	async execute(message, audioPlayer) {
		await resolvePlay(message, audioPlayer, "radiosraka.com", "/", "http");
	},
};