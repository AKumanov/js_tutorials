/*
Check distance between two points and the beginning of the Cartesian
coordinate system;

var a = x1 - x2;
var b = y1 - y2;

var c = Math.sqrt( a*a + b*b );

c is the distance

order: 
(1) {x1, y1} - {0, 0}; 
(2) {x2, y2} - {0, 0}; 
(3) {x1, y1} - {x2, y2};

*/


function validityChecker(x1, y1, x2, y2) {
    console.log(Math.sqrt((x1 - y1) ** 2) + 0);
}

// validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);