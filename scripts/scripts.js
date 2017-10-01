module.exports = function(bot) {
	bot.hear(/TESTBB8/, function(res) {
	  return res.send("I am alive!");
	});
}