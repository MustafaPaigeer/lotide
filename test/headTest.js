const assertEqual = require('../assertEqual');
const head = require('../head');

// Test Code for HEAD file

assertEqual(head([5]), 5);
assertEqual(head(["Hello"]), "Hello");