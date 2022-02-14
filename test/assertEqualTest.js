const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


// Test Code for HEAD file

assertEqual(head([]), 5);
assertEqual(head(["Hello"]), "Hello");


