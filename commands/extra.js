const { execute } = require("../utils.js");

module.exports = {
	name: "extra",
	async execute(message, audioPlayer) {
		execute(message, audioPlayer, "streams.extrafm.hr", ":8110/stream?2124");
	},
};