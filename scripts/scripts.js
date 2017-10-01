module.exports = function(bb8) {
	bb8.hear(/TESTBB8/, function(res) {
	  return res.send("I am alive!");
	});
}