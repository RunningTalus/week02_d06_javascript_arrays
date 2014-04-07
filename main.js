var weatherPatterns = ['sunny','cloudy', 'snowy'];
console.log(weatherPatterns);
	//returns ['sunny','cloudy', 'snowy']

console.log(weatherPatterns[0]);
	//returns 'sunny'

console.log(weatherPatterns[1]);
	//returns 'cloudy'

console.log(weatherPatterns[2]);
	// returns 'snowy'

console.log(weatherPatterns[3]);
	//returns undefined

console.log(weatherPatterns.length);
	//returns 3

console.log(weatherPatterns[weatherPatterns.length-1]);
	//finds the last item in the array
	//returns 'snowy'

for (var i=0; i<weatherPatterns.length; i++) {
	console.log('It\'s ' + weatherPatterns[i] + '.');
}
	//returns 'It's sunny'
	//returns 'It's cloudy'
	//returns 'It's snowy'

for (var i=0; i<weatherPatterns.length; i++) {
  if (i === 0) {
    console.log('Go outside.  It\'s a bluebird day!');
  } else {
    	console.log('Stay inside.  It\'s nasty outside!');
  }
};

//returns 'Go outside. It's a bluebird day!'
//returns 'It's nasty outside!'
//returns 'It's nasty outside!'

for (var i=0; i<weatherPatterns.length; i++) {
  if (weatherPatterns[i]==='sunny') {
    console.log('Go outside.  It\'s beautiful out there!');
  } else {
      console.log('Stay inside.  It\'s mud season.');
  }
};

//returns 'Go outside. It's beautiful out there!'
//returns 'Stay inside.  It's mud season.'
//returns 'Stay inside.  It's mud season.'

console.log(weatherPatterns);
//returns ['sunny', 'cloudy', 'snowy']

weatherPatterns.push('stormy');
console.log(weatherPatterns);
//returns ['sunny', 'cloudy', 'snowy', 'stormy'];

weatherPatterns.push('microburst');
console.log()
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
