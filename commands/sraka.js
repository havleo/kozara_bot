const { resolvePlay } = require("../utils.js");

//TODO: will it ever work?
module.exports = {
	name: "sraka",
	async execute(message, audioPlayer) {
		await resolvePlay(message, audioPlayer, "radiosraka.com", "/", "http");
	},
};