$(document).ready(function() {
	var unfinishedDescriptions = $(".unfinished-description");
	unfinishedDescriptions.each(function(i) {
		var quote = "";
		while (quote.length < 190)
			quote += randomQuote() + " ";
		quote += "He is the most interesting man in the world";
		unfinishedDescriptions[i].innerHTML = quote;
	});

	// there is a 1% chance that all photos become photos of Abhinav Madahar
	if (Math.random() < 0.01) {
		var images = $("img");
		images.each(function(i) {
			images[i].src = "members/hipster.jpg";
			console.log(images[i]);
		})
	}
})
