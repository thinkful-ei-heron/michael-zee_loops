'use strict';
function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

//drill 2
function filter(array, fn) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(
      `The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${
        1 === warningCounter ? 'time' : 'times'
      } today!`
    );
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const avalancheWarning = hazardWarningCreator('avalanche closure');
const wildfireWarning = hazardWarningCreator('wildfire');

rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

rocksWarning('Centinela Ave and Olympic Blvd');
// => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// => The Rocks on the Road hazard has triggered 2 time(s) today!

// Invoke the other hazard creators you instantiated, too

avalancheWarning('I-70 between Frisco and Copper Mountain');
avalancheWarning('the Eisenhower-Johnson Tunnel');
avalancheWarning('I-70 between Copper Mountain and Vail');
wildfireWarning('US-36 near Boulder');

function goTurtle(movements) {
  movements
    //strip items where turtle moves back OR right
    .filter(movement => !(movement[0] < 0 || movement[1] < 0))
    //new array with total steps for each remaining movement
    .map(move => move[0] + move[1])
    //print the steps to console
    .forEach((steps, index) => {
      console.log(
        `Movement #${index + 1}: ${steps} step${steps !== 1 ? 's' : ''}`
      );
    });
}

goTurtle([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);

function decode(str){
  let arr = str.split(' ');
  return arr.reduce((acc, cur) => 3 === cur.length ? acc.concat(' ') : acc.concat(cur.slice(-1).toUpperCase()), '');
}

console.log(decode('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));