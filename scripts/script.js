module.exports = function(bb8) {
	/*bb8.respond(/Please welcome (.*) and (.*)/i, function(msg) {
		var name1;
		var name2;
		name1 = msg.match[1];
		name2 = msg.match[2];
	  return msg.reply("Welcome " + name1 + " and " + name2 + ". Have a glorious day");
	});*/


/*
Have a message post to Slack based on user input
Do at least 3 different things.
One of the commands must utilize the list of people in the class to send a direct message or reply.
Leverage Hubot
Use at least 1 conditional to change the outcome of a Slackbot.

BONUS 
Leverage a for loop to iterate over a collection
Introduce a random component
Include an image in the response in addition to text
*/


// Star wars and space themed bot


// Confirm @bb8 is alive
bb8.hear(/The force?/, function(res) {
	return res.send("*droid noises*");
});

// Who started the war?
bb8.respond(/Who started the war?/i, function(res) {
	return res.send("Rebel scum");
});


// Conditional user input to output quotes based on character
bb8.respond(/Quote: (.*)/i, function(msg) {
	var input = msg.match[1];
	var filtered = input.toLowerCase();

	switch(filtered) {
		case "leia":
			return msg.send('"Help me, Obi-Wan Kenobi. You’re my only hope.” — ' + input);
			break;
		case "vader":
		case "darth vader":
			return msg.send('“I find your lack of faith disturbing.” — ' + input);
			break;
		case "yoda":
			return msg.send('“Do. Or do not. There is no try.” - ' + input);
			break;
		case "solo":
		case "han solo":
		case "han":
			return msg.send('“Never tell me the odds! — ”' + input);
			break;
		case "luke":
		case "skywalker":
		case "luke skywalker":
			return msg.send('“NOOOOOOOOOOOOO!” — ' + input);
			break;
		default:
			return msg.send(input + ' is not included, Please try again.');
			break;
	}
});


// Random output
// Uses reply method
// Is user Jedi or Sith lord?
bb8.respond(/Is (.*) to be trusted?/i, function(msg) {
	var name = msg.match[1];
	var side = ['sith lord', 'jedi knight', 'path has yet to be found'];

	var fate = msg.random(side);
	if (fate == 'sith lord') {
		return msg.reply(name + " is a " + fate + ". Do not fall to their power.");
	}
	else if (fate == 'jedi knight') {
		return msg.reply(name + " is a " + fate + ". They will be faithful.");
	}
	else if (fate == 'path has yet to be found') {
		return msg.reply(name + "'s " + fate + ". Guide them.");
	}
});

// Image and text together
// Get photo based on search query
bb8.respond(/Get photo of (.*)/i, function(msg) {
	var pic = msg.match[1].toLowerCase();
	var url = "https://source.unsplash.com/featured/?" + pic;

	return msg.reply("Here is a pic of: " + pic + ". " + url);
});

/***************************
END OF BASIC ABILITIES,
BEGIN RESOURCES PROGRAM
***************************/

// save js resources
// define array
var resources = [];

// save resource function
bb8.hear(/save resource (.*) : (.*)/i, function(msg) {
	var resource = msg.match[1];
	var note = msg.match[2] || "";

	var bundle = {
		"url": resource,
		"note": note
	};

	resources.push(bundle);

	return msg.reply("I have saved the resource");
});

// bb8 list resources
bb8.hear(/list resources/, function(res) {
	var display = "";
	for(var i = 0; i < resources.length; i++) {
		var display = display + "\n" + resources[i].url + " : " + resources[i].note;
	}

	return res.reply(display);
});

// bb8 clear resources list
bb8.hear(/clear resources/, function(res) {

	var values = "";

	resources.splice(0, resources.length);

	return res.reply('Removed all values. @bb8 list resources will return none');
});

// bb8 remove latest entry
bb8.hear(/pop resources/, function(res) {
	var value = resources.pop();

	return res.reply('Removed: ' + value.url);
});

// bb8 send resources to myself or someone else
bb8.hear(/send resources to (.*)/i, function(msg) {
	var person = msg.match[1];

	// loop through resources
	var display = "";
	for(var i = 0; i < resources.length; i++) {
		var display = display + "\n" + resources[i].url + " : " + resources[i].note;
	}

	try {
		return bb8.messageRoom(person, display);
	} catch(error) {
		return res.reply('There was an error.')
	}
});


}