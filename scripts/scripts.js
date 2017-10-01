module.exports = function(bb8jsr) {
	bb8jsr.respond(/TEST-BB8-JSR/, function(res) {
	  return res.send("I am alive!");
	});

	bb8jsr.hear(/TESTBB8/, function(res) {
	  return res.send("I am alive!");
	});
}