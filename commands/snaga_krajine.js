const { execute } = require("../utils.js");

module.exports = {
	name: "snaga_krajine",
	async execute(message, audioPlayer) {
		execute(message, audioPlayer, "s7.voscast.com:7096", "/;");
	},
};