"use strict";
const prices = [1, 3, 2, 2, 2, 'as'];
prices.push(1);
prices.push('1');
let user;
// user = ['nicobytes', 15];
// user = ['12', 15];
// user = [];
// user = ['nico'];
// user = ['nico', 12];
user = ['nico', 12, true];
const [username, age] = user;
console.log(username);
console.log(age);
