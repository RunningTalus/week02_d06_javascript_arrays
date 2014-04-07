ARRAYS

	instanceof

	Ordered list of values
	
	var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	var thirdDayOfWeek = days[2];
	alert(thirdDayOfWeek);

	returns Wednesday

		Between brackets of var days is an "array literal"

	var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	alert(days.length);



OBJECTS
	A value with custom properties

	var movieReview = {
		title: "Tommy Boy"
		director: "some funny dude"
		rating: 5.0
	}
	

	key value e.g.(title:'Tommy Boy')
	name value e.g.(title:'Tommy Boy')
	BOTH key value AND name value are "Properties"

	KEYS & NAMES: Are strings.
	VALUES: May be any 'type.'

	What is a VALUE?
		A value is something that can be STORED.
			Primitives
			Array

	var movieReview = {
		title: "Spirited Away"
		director: "Hayao Miyazaki"
		rating: 4.5
	}

	var movieTitle = movieReview['title'];
	alert(movieTitle);

	var propertyName = 'title';
	
	movieReview[propertyName];
	movieReview['ti' + 'tle'];
	movieReview[['t' + 'i' + 't' + 'l' + 'e'].join('')]
	movieReview['TITLE'];
	movieReview['TITLE'.toUpperCase()];
	movieReview['TITLE'.toLowerCase()];

	var movieReview = {
		title: "Spirited Away"
		director: "Hayao Miyazaki"
		rating: 4.5
	};

	var ratingPercent = movieReview['rating'] /5 *100;
	alert(ratingPercent + "%");
	// returns 90%


	var movieReview = {
     title:    "Spirited Away",
     director: "Hayao Miyazaki",
     rating:   4.5
	};
	movieReview["year"] = 2001;
	alert(movieReview["year"]);
		//returns 2001


	var movieReview = {
	     title:    "Spirited Away",
	     director: "Hayao Miyazaki",
	     rating:   4.5
	};
	movieReview.year = 2001;
	alert(movieReview.year);
		//returns 2001


