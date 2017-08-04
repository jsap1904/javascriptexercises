// var johnAge = 25
// var johnHeight = 190
// var mikeAge = 25
// var mikeHeight = 190
// var maryAge = 30
// var maryHeight = 170

// var maryScore = maryHeight + (5* maryAge)
// var johnScore = johnHeight + (5 * johnAge)
// var mikeScore = mikeHeight + (5 * mikeAge)

// if (mikeScore === johnScore && mikeScore === maryScore) {
// 	console.log("Draw!");
// } else if (mikeScore && maryScore < johnScore) {
// 	console.log("John wins!! with " + johnScore + " points");
// } else if (johnScore && mikeScore < maryScore) {
// 	console.log("Mary wins!! with " + maryScore + " points")
// } else {
// 	console.log("Mike Wins!! with " + mikeScore + " points")
// }
//var year = [1987, 1990, 1996, 2000, 2012]

function printFullAge(years) {

var ages = [];
var fullAges = [];

	for( var i = 0; i < years.length; i++) {
	ages[i] = 2017 - years[i];
};

	for (i = 0; i < ages.length; i++) {
		if (ages[i] >= 18) {
		console.log("Person  " + (i + 1) + " is " + ages[i] + " old, and is of full age");
		fullAges.push(true);
		}else {
		console.log("Person  " + (i + 1) + "  is too young at " + ages[i] + " years old");
		fullAges.push (false);
		}
	};
	return fullAges;
}

var years = [2001, 2005, 2010, 2012];
var full_1 = printFullAge(years);
var full_2 = printFullAge([1817, 1915]);
