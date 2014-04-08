http://metaraine.github.io/gettingStartedJS/#/33

ARRAYS

	instanceof

	An ARRAY is an ordered list of values
	Access an individual item with myArray[INDEX]
	
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
		title: "Spirited Away"
		director: "Hayao Miyazaki"
		rating: 4.5
	}
	

	key value e.g.(title:'Spirited Away')
	name value e.g.(title:'Spirited Away')
	BOTH key value AND name value are "Properties"

	KEYS & NAMES: Are strings.
	VALUES: May be any 'type.'

	What is a VALUE?
		A value is something that can be STORED.

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

//

	var movieReview = {
		title: "Spirited Away"
		director: "Hayao Miyazaki"
		rating: 4.5
	};

	var ratingPercent = movieReview['rating'] /5 *100;
	alert(ratingPercent + "%");
	// returns 90%

//

	var movieReview = {
     title:    "Spirited Away",
     director: "Hayao Miyazaki",
     rating:   4.5
	};
	movieReview["year"] = 2001;
	alert(movieReview["year"]);
		//returns 2001

//

	var movieReview = {
	     title:    "Spirited Away",
	     director: "Hayao Miyazaki",
	     rating:   4.5
	};
	movieReview.year = 2001;
	alert(movieReview.year);
		//returns 2001

//

	var student ={
		name:"Zed",
		iq:120,
		age:300
	};

	for (var key in student) {
		console.log(key)
	}

	//returns
	//name
	//iq
	//age

//

	for (var key in student) {
	console.log(student[key]);
	}
	
	//returns
	//Zed
	//120
	//300

//

REVIEW TUESDAY APRIL 8th, 2014

.Notation
	Valid identifier (no - in key name)
	Key CANNOT be stored in variable
	myObject.Name
		.Name is treated as a string literal

Arrays
	Stack (Push & Pop).
		Last In, First out (LIFO).
			Adding and removing from the same end.  
				example: Elevator, Fishing Boat, Laundry Basket
	Queue (Push & Shift).
		First In, First Out (FIFO).
			Adding and removing from the opposite end.  

