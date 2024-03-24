//age

let age = +prompt("Введите свой возраст");
let year = 2024 - age;
alert(`Ваш год рождения: ${year}`)


//temperature
let celsius = +prompt("Введите температуру в градусах Цельсия:");
let fahrenheit = (celsius * 9 / 5) + 32;
alert(`Температура в градусах Фаренгейта: ${fahrenheit}`);

//divide
let num1 = +prompt("Введите первое число:");
let num2 = +prompt("Введите второе число:");
let result = Math.floor(num1 / num2);
alert(`Результат деления нацело: ${result}`);

//currency
const rate = 40;
let uah = +prompt("Введите количество грн:");
let eur = (uah / rate).toFixed(2);
alert(`${uah} грн в евро будет - ${eur} €`);

//RGB

let red = prompt("Введите значение для красного (от 0 до 255):");
let green = prompt("Введите значение для зеленого (от 0 до 255):");
let blue = prompt("Введите значение для синего (от 0 до 255):");

let redHex = red.toString(16);
let greenHex = green.toString(16);
let blueHex = blue.toString(16);
let cssColor = '#' + redHex + greenHex + blueHex;

alert(`CSS-цвет:  ${cssColor}`);

//flats
let numFloors = parseInt(prompt("Введите количество этажей в доме:"));
let numApartmentsPerFloor = parseInt(prompt("Введите количество квартир на каждом этаже:"));
let apartmentNumber = parseInt(prompt("Введите номер квартиры:"));
let entrance = Math.ceil(apartmentNumber / (numFloors * numApartmentsPerFloor));
let floor = ((apartmentNumber - 1) % (numFloors * numApartmentsPerFloor)) / numApartmentsPerFloor + 1;
alert(`Квартира ${apartmentNumber} находится в подъезде ${entrance} на ${floor} этаже.`);
