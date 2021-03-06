"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Guam"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Guam", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Guam", { abbr: true }),

	"2000" : helpers.makeTestYear("Pacific/Guam", [
		["2000-12-22T13:59:59+00:00", "23:59:59", "GST", -600],
		["2000-12-22T14:00:00+00:00", "00:00:00", "ChST", -600]
	])
};