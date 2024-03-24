//Temperature

function getfahrenheit(celsius) {

    return (celsius * 9 / 5) + 32;
}

//RGB

function rgbToHex(r, g, b) {
    const toHex = (num) => {
        const hex = num.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const red = toHex(r);
    const green = toHex(g);
    const blue = toHex(b);

    return `#${red}${green}${blue}`;
}


//Flats

let numFloors = +prompt("Введите количество этажей в доме:");
let numApartmentsPerFloor = +prompt("Введите количество квартир на каждом этаже:");
let apartmentNumber = +prompt("Введите номер квартиры:");

function findApartmentLocation(numFloors, numApartmentsPerFloor, apartmentNumber) {
    let entrance = Math.ceil(apartmentNumber / (numFloors * numApartmentsPerFloor));
    let floor = ((apartmentNumber - 1) % (numFloors * numApartmentsPerFloor)) / numApartmentsPerFloor + 1;
    return { entrance: entrance, floor: floor };
}



//Credentials


function getFullName() {
    let firstName = prompt("Введите ваше имя:");
    let lastName = prompt("Введите вашу фамилию:");
    let middleName = prompt("Введите ваше отчество:");


    firstName = firstName.trim().charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.trim().charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    middleName = middleName.trim().charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();
    let fullName = firstName + " " + lastName + " " + middleName + " ";
    const res = {
        name: firstName,
        surname: lastName,
        fatherName: middleName,
        fullName: fullName
    }
    return res
}

//New line

function getNewLine(str) {

    return `${str.split("\\n").join("\n")}`
}

//Prompt OR
const getAgeInput = (promptText, defaultValue) => (prompt(promptText) === null || prompt(promptText).trim() === "") ? defaultValue : prompt(promptText);

//Login And Password

function login(login, password) {
    let usserLogin = prompt("Введите логин:");
    let usserPassword = prompt("Введите пароль:");

    if (usserLogin === login && usserPassword === password) {
        return true;
    } else {
        return false;
    }
}



//For Table
function getHtmlTable(arr) {
    let str = "<table>";

    for (const row of arr) {
        str += "<tr>";
        for (const cell of row) {
            str += `<td>${cell}</td>`;
        }
        str += "</tr>";
    }

    str += "</table>";
    return str
}

//Filter Lexics

function filterString(str, arr) {
    const wordsArray = str.split(" ");
    const filteredArray = wordsArray.filter(word => !arr.includes(word));
    return filteredArray.join(" ");

}

//Currency Table


function fetchAndDisplayCurrencyTable() {
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            const currencyKeys = Object.keys(data.rates);
            const currencies = data.rates;

            let currencyArray = [];
            currencyArray.push([""].concat(currencyKeys));

            for (const currencyOuter of currencyKeys) {
                let row = [currencyOuter];
                for (const currencyInner of currencyKeys) {
                    if (currencyOuter === currencyInner) {
                        row.push("1.00");
                    } else {
                        const rate = (1 / currencies[currencyOuter]) * currencies[currencyInner];
                        row.push(rate.toFixed(4));
                    }
                }
                currencyArray.push(row);
            }

            const htmlTable = getHtmlTable(currencyArray);
            document.write(htmlTable);
        })
        .catch(error => {
            console.error('Error fetching currency data:', error);
        });
}

function getHtmlTable(arr) {
    let str = "<table border='1'>";

    for (const row of arr) {
        str += "<tr>";
        for (const cell of row) {
            str += `<td>${cell}</td>`;
        }
        str += "</tr>";
    }

    str += "</table>";
    return str;
}


// fetchAndDisplayCurrencyTable();



//Form

function getForm(arr) {

    let str = "<form>";

    for (const keys in arr) {
        str += `<label> ${keys}: <input type="${(typeof arr[keys] === 'number') ? 'number' : (typeof arr[keys] === 'string') ? 'text' : 'checkbox'}" value="${arr[keys]}"/></label>`
    }

    str += "</form>";
    document.write(str);



}
const car = {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA",
    "in_production": false
}


getForm(car);



//Array of objects sort
function sort(array, field, ascending = true) {
    array.sort((a, b) => {
        let comparison = 0;
        if (a[field] > b[field]) {
            comparison = 1;
        } else if (a[field] < b[field]) {
            comparison = -1;
        }
        return ascending ? comparison : -comparison;
    });
}

var persons = [
    { name: "Иван", age: 17 },
    { name: "Мария", age: 35 },
    { name: "Алексей", age: 73 },
    { name: "Яков", age: 12 },
];

//Table

function sort(array, field, ascending = true) {
    array.sort((a, b) => {
        let comparison = 0;
        if (a[field] > b[field]) {
            comparison = 1;
        } else if (a[field] < b[field]) {
            comparison = -1;
        }
        return ascending ? comparison : -comparison;
    });
}

function getSortedTable(array, field, ascending = true) {
    // Создаем копию исходного массива
    const sortedArray = [...array];

    // Сортируем массив
    sort(sortedArray, field, ascending);

    // Формируем HTML для таблицы
    let str = "<table border='1'><tr>";

    // Формируем заголовки таблицы
    const arrKeys = Object.keys(sortedArray[0]);
    for (const key of arrKeys) {
        str += `<th>${key}</th>`;
    }
    str += "</tr>";

    // Формируем строки таблицы с данными
    for (const obj of sortedArray) {
        str += "<tr>";
        for (const key of arrKeys) {
            str += `<td>${obj[key] === undefined ? '' : obj[key]}</td>`;
        }
        str += "</tr>";
    }

    str += "</table>";

    // Выводим таблицу на страницу
    document.write(str);
}

// Пример использования функции
const person = [
    {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA"
    },
    {
        "Name": "buick skylark 320",
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 350,
        "Horsepower": 165,
        "Weight_in_lbs": 3693,
        "Acceleration": 11.5,
        "Year": "1970-01-01",
    },
    {
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 318,
        "Horsepower": 150,
        "Weight_in_lbs": 3436,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "amc rebel sst",
        "Miles_per_Gallon": 16,
        "Cylinders": 8,
        "Displacement": 304,
        "Horsepower": 150,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
];

getSortedTable(person, "Name", true);


//Divide


const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const divisionResult = document.getElementById("divisionResult");

const calcResult = () => {
    const num1 = +firstNumber.value;
    const num2 = +secondNumber.value;
    const result = Math.floor(num1 / num2);
    divisionResult.textContent = `Результат деления нацело: ${result}`;
};

firstNumber.addEventListener('input', calcResult);
secondNumber.addEventListener('input', calcResult);

//

const numFloorsInput = document.getElementById("numFloors");
const numApartmentsPerFloorInput = document.getElementById("numApartmentsPerFloor");
const apartmentNumberInput = document.getElementById("apartmentNumber");
const resultDiv = document.getElementById("result");

const calculateFlat = () => {
    const numFloors = parseInt(numFloorsInput.value);
    const numApartmentsPerFloor = parseInt(numApartmentsPerFloorInput.value);
    const apartmentNumber = parseInt(apartmentNumberInput.value);

    const entrance = Math.ceil(apartmentNumber / (numFloors * numApartmentsPerFloor));
    const floor = ((apartmentNumber - 1) % (numFloors * numApartmentsPerFloor)) / numApartmentsPerFloor + 1;

    resultDiv.textContent = `Квартира ${apartmentNumber} находится в подъезде ${entrance} на ${floor} этаже.`;
};

numFloorsInput.addEventListener('input', calculateFlat);
numApartmentsPerFloorInput.addEventListener('input', calculateFlat);
apartmentNumberInput.addEventListener('input', calculateFlat);