//Confirms
{
    let answers = [];

    const questions = [
        "Вы согласны с условиями?",
        "Вы уверены, что хотите продолжить?",
        "Желаете подписаться на нашу рассылку?"
    ];

    questions.forEach(question => {
        const answer = confirm(question);
        answers.push(answer);
    });

    console.log(answers);

}

//Prompts
{
    let answers = [];

    const questions = [
        "Как вас зовут?",
        "Сколько вам лет?",
        "Какой ваш любимый цвет?"
    ];

    questions.forEach((question, index) => {
        const answer = prompt(question);
        answers[index] = answer;
    });

    console.log(answers);

}

//Item access
{
    let array = [10, 20, 30, 40, 50];
    let index = prompt("Введите индекс в массиве:");


    if (index >= 0 && index < array.length) {
        alert(`Значение элемента по индексу ${index} : ${array[index]}`);
    } else if (index === "length") {
        alert(`Длина массива: ${array.length}`);
    }
}

//Item change

{
    let array = [10, 20, 30, 40, 50];

    let index = +prompt("Введите индекс в массиве:");
    let value = +prompt("Введите значение для этого индекса:");

    array[index - 1] = value;
    console.log("Массив после изменения:", array);

}


{
    //Multiply table

    const arr = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];
    //Multiply table slice

    const arrWithoutZeros = arr.map(row => row.slice(1));

    //Copy
    const copyArr = arr.slice();
    //Deep Copy

    const deepCopyArray = arr.map(arr => arr.slice());
    const bigArr = [].concat(...arr);

    console.log(bigArr);
    console.log("Длина массива:", bigArr.length);


    {
        //Multiply table rest
        const [[, ...firstRow], [, ...secondRow], [, ...thirdRow], [, ...fourthRow], [, ...fifthRow]] = arr;
        const arrWithoutZeros = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
        console.log(arrWithoutZeros);
    }


}

//IndexOf Word

{
    const sentence = prompt("Введите строку из нескольких слов:");
    const word = prompt("Введите искомое слово:");

    const arr = sentence.split(" ");
    const index = arr.indexOf(word);

    if (index !== -1) {
        alert(`Слово "${word}" находится на позиции ${index + 1} в строке "${sentence}".`);
    } else {
        alert(`Слово "${word}" не найдено в строке "${sentence}".`);
    }

}



{
    //Reverse
    let arr = [];
    for (let i = 0; i < 5; i++) {
        const userInput = prompt(`Введите элемент ${i + 1}:`);
        arr.push(userInput);
    }
    let reversArr = [];
    while (arr.length > 0) {
        reversArr.push(arr.pop());
    }
    console.log(`Массив в обратном порядке: ${reversArr}`);

    //Reverse 2
    let reversArr2 = [];

    while (reversArr.length > 0) {
        reversArr2.unshift(reversArr.shift());
    }

    console.log(`Перевернутый второй массив в исходный порядок: ${reversArr2}`);


}



//Array Equals

{
    let arr = [1, 2, 3];
    let arr1 = arr;
    let arr2 = arr;

    console.log(arr1 === arr2);

}

//Destruct
{
    const userInput = prompt("Введите строку:");
    const arr = [...userInput];
    const [first, , , , fifth, , , , ninth] = arr;

    console.log("Первая буква:", first);
    console.log("Пятая буква:", fifth);
    console.log("Девятая буква:", ninth);
}

//Destruct default
{
    const userInput = prompt("Введите строку:");

    const arr = [...userInput];

    const [second = '!', , fourth = '!', fifth = '!'] = arr;

    console.log("Вторая буква:", second);
    console.log("Четвертая буква:", fourth);
    console.log("Пятая буква:", fifth);

}


{
    //For Alert
    const names = ["John", "Paul", "George", "Ringo"];

    for (const name of names) {
        alert(name);
    }

}


//For Select Option
{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";

    for (let currency of currencies) {
        str += `<option value="${currency}">${currency}</option>`;
    }

    str += "</select>";
    document.write(str);
}

//For Table Horizontal

{
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table>";

    str += "<tr>";

    for (const name of names) {
        str += `<td>${name}</td>`;
    }

    str += "</tr>";
    str += "</table>";
    document.write(str);

}

//For Table Vertical

{
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table>";

    for (let name of names) {
        str += "<tr>";
        str += `<td>${name}</td>`;
        str += "</tr>";
    }

    str += "</table>";
    document.write(str);

}

//For Table Letters
{
    const currencies = ["USD", "EUR", "GBR", "UAH"];
    let str = "<table>";

    for (let i = 0; i < 4; i++) {
        str += "<tr>";
        for (let j = 0; j < 3; j++) {
            str += `<td>${currencies[i][j]}</td>`;
        }
        str += "</tr>";
    }

    str += "</table>";
    document.write(str);



}

//For Multiply Table

{
    const arr = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];

    let str = "<table>";

    for (const row of arr) {
        str += "<tr>";
        for (const cell of row) {
            str += `<td>${cell}</td>`;
        }
        str += "</tr>";
    }

    str += "</table>";
    document.write(str);

}

//Function Capitalize
{
    const capitalize = str => {
        let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        return result;
    };

    console.log(capitalize("cANBerRa"));
}

//Map Capitalize

{
    const capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const inputString = prompt("Введите строку:");
    const wordsArray = inputString.split(" ");
    const capitalizedArray = wordsArray.map(capitalize);
    const resultString = capitalizedArray.join(" ");

    console.log(resultString);

}

//Filter Lexics
{
    const invalidWords = ["дурак", "идиот", "что-то неприличное"];

    const inputString = prompt("Введите строку:");
    const wordsArray = inputString.split(" ");

    const filteredArray = wordsArray.filter(word => !invalidWords.includes(word));

    const resultString = filteredArray.join(" ");

    console.log(resultString);

}

//Beep Lexics

{
    const bannedWords = ["дурак", "идиот", "что-то неприличное"];

    const inputString = prompt("Введите строку:");
    const wordsArray = inputString.split(" ");

    const modifiedArray = wordsArray.map(word => bannedWords.includes(word) ? "BEEP" : word);

    const resultString = modifiedArray.join(" ");

    console.log(resultString);

}

//Reduce HTML


{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";

    str += currencies.reduce((acc, currency) => {
        return acc + `<option value="${currency}">${currency}</option>`;
    }, "");

    str += "</select>";

    document.write(str);
}

//For Brackets Hell Check


{
    const line = prompt();
    const bracketsStack = [];
    let i = 0;
    for (let character of line) {
        if (character === "[" || character === "(" || character === "{") {
            bracketsStack.push({ character, index: i });
        } else if (character === "]" || character === ")" || character === "}") {
            if (bracketsStack.length === 0) {
                console.log(`Ошибка: лишняя закрывающая скобка на позиции ${i}`);
                break;
            }
            const lastBracket = bracketsStack.pop();
            if (
                (character === "]" && lastBracket.character !== "[") ||
                (character === ")" && lastBracket.character !== "(") ||
                (character === "}" && lastBracket.character !== "{")
            ) {
                console.log(`Ошибка: неправильно закрытая скобка на позиции ${i}`);
                break;
            }
        }
        i++;
    }

    if (bracketsStack.length === 0) {
        console.log("Строка без ошибок");
    } else {
        console.log(`Ошибка: не закрытая скобка на позиции ${bracketsStack[0].index}`);
    }

}