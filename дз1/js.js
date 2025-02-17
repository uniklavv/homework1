// Задание №1
var str = 'abcde';
console.log(str[0], str[1], str[4]);

// Задание №2
let a = parseInt(prompt("введи первое число: "));
let b = parseInt(prompt("введи второго число:"));
console.log(a > 0 || b > 0);

// Задание №3
let age = parseInt(prompt("введи сколько годиков:"));
if (age >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}