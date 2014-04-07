var weatherPatterns = ['sunny','cloudy', 'snowy'];

weatherPatterns[0];
	//returns sunny

weatherPatterns[1];
	//returns cloudy

weatherPatterns[2];
	// returns snowy

weatherPatterns.length;
	//returns 3

weatherPatterns[weatherPatterns.length-1];
	//finds the last item in the array
	//returns snowy

for (var i=0; i<weatherPatterns.length; i++) {
	alert('It\'s ' + weatherPatterns[i] + '.');
}
	//returns "It's sunny"
	//returns "It's cloudy"
	//returns "It's snowy"

for (var i=0; i<weatherPatterns.length; i++) {
  if (i === 0) {
    alert('Go outside.  It\'s a bluebird day!');
  } else {
        alert('Stay inside.  It\'s nasty outside!');
  }
};

for (var i=0; i<weatherPatterns.length; i++) {
  if (weatherPatterns[i]==='sunny') {
    alert('Go outside.  It\'s beautiful out there');
  } else {
        alert('Stay inside.  It\'s mud season.');
  }
};

weatherPatterns.push('stormy');
weatherPatterns.push('sunny');
weatherPatterns.push('windy');
console.log(weatherPatterns);

weatherPatterns.pop();
console.log(weatherPatterns);

weatherPatterns.shift();
//removes from the beginning

weatherPatterns.unshift();

weatherPatterns.join(', ');
weatherPatterns.join(' ; ');
weatherPatterns.join(' and ');

weatherPatterns.slice(1,2)
