const { execute } = require("../utils.js");

module.exports = {
	name: "sraka",
	async execute(message, audioPlayer) {
			execute(message, audioPlayer, "sraka.siradiostream.net")
	},
};