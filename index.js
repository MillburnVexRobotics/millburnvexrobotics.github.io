(function() {
	$(document).ready(function() {
		// not everyone finished their descriptions, so we have to add them in
		var descriptions = $(".card-content p");
		descriptions.each(function(i) {
			// ignore the ones that already have a description
			if (descriptions[i].innerHTML !== "")
				return;

			// if it's empty, generate and insert a description
			var quote = "";
			while (quote.length < 190)
				quote += randomQuote() + " ";
			quote += "He is the most interesting man in the world.";
			descriptions[i].innerHTML = quote;
		});

		// there is a 1% chance that all photos become photos of Abhinav Madahar
		if (Math.random() < 0.01) {
			var images = $("img");
			images.each(function(i) {
				images[i].src = "members/hipster.jpg";
			})
		}
	})
})()
