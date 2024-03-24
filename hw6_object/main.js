//Literals


const cat = {
    age: 5,
    color: "black",
    name: "Myrchik"
}


//Literals expand
let property1 = prompt("Введите название первого свойства:");
let key1 = prompt("Введите значение первого свойства:");
cat[property1] = key1;

let property2 = prompt("Введите название второго свойства:");
let key2 = prompt("Введите значение второго свойства:");
cat[property2] = key2;
console.log(cat);


//Literals copy

let newProperty = prompt("Введите название нового свойства:");
let newKey = prompt("Введите значение нового свойства:");
const newObj = Object.assign({}, cat);;
newObj[newProperty] = newKey;
console.log(newObj);


//Html tree
let usserAtr = prompt("Введите значение атрибута");

let body = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'span',
                    children: ['Enter a data please:']
                },
                {
                    tagName: 'br'
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'name'
                    }
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'surname'
                    }
                }
            ]
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'button',
                    attrs: {
                        id: 'ok',
                        usserAtr: prompt("Введите значение атрибута")
                    },
                    children: ['OK']
                },
                {
                    tagName: 'button',
                    attrs: {
                        id: 'cancel'
                    },
                    children: ['Cancel']
                }
            ]
        }
    ]
};
let btnText = body.children[1].children[0].children[0];
console.log(btnText);

let inputID = body.children[0].children[3].attrs.id;
console.log(inputID);

//Parent
body.children[0].parent = body;
body.children[1].parent = body;
body.children[0].children[0].parent = body.children[0];
body.children[0].children[1].parent = body.children[0];
body.children[0].children[2].parent = body.children[0];
body.children[0].children[3].parent = body.children[0];
body.children[1].children[0].parent = body.children[1];
body.children[1].children[1].parent = body.children[1];


//Destructure

let { children: [{ children: [{ children: childrenSpanArray }, , , { attrs: { id } }] }, { children: [{ children: childrenArray }, { }] }] } = body;

console.log(childrenSpanArray);
console.log(childrenArray);
console.log(id);

//Destruct array


{
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"]


    let even1, even2, odd1, odd2, odd3;
    let letters = [];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (typeof item === 'number') {
            if (item % 2 === 0) {
                if (!even1) even1 = item;
                else even2 = item;
            } else {
                if (!odd1) odd1 = item;
                else if (!odd2) odd2 = item;
                else odd3 = item;
            }
        } else {
            letters.push(item);
        }
    }

    console.log('Четные числа:', even1, even2);
    console.log('Нечетные числа:', odd1, odd2, odd3);
    console.log('Буквы:', letters);

}

//Destruct string
let arr = [1, "abc"]

let [number, [s1, s2, s3]] = arr
console.log(number);
console.log(s1, s2, s3);

//Destruct 2
let obj = {
    name: 'Ivan',
    surname: 'Petrov',
    children: [{ name: 'Maria' }, { name: 'Nikolay' }]
}

let name1 = obj.children[0].name
let name2 = obj.children[1].name
console.log(name1);
console.log(name2);

//Destruct 3
{

    let arr = [1, 2, 3, 4, 5, 6, 7, 10]
    let [a, b, ...rest] = arr
    let length = arr.length;
    console.log(a, b);
    console.log(length);


}

//Copy delete

{
    let property1 = prompt("Введите название первого свойства:");
    let key1 = prompt("Введите значение первого свойства:");
    const cat = {
        age: 5,
        color: "black",
        name: "Myrchik",
        property1: key1,
    }
    cat[property1] = key1;



    //Literals expand


    let { property1: value, ...newObj } = cat;

}

//Currency real rate
{

    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            //ця функція запускається коли дані завантажуються.
            //Інший код працює РАНIШЕ.
            //тільки тут є змінна data з завантаженими даними
            console.log(data) // Вивчіть структуру, що отримується з сервера в консолі

            const userPrompt = prompt('Введите валюту которую вы хотите поменять');
            if (userPrompt === null) {
                alert('Вы отменили ввод ');
            }
            let userInputRate = userPrompt.toUpperCase();
            const findRate = data.rates[userInputRate];

            if (!findRate) {
                alert('Вы ввели что-то не верно или не ввели вообще ничего');
            }
            else {
                const userPromptConversion = prompt('Введите валюту на которую вы хотите поменять');
                if (userPromptConversion === null) {
                    alert('Вы отменили ввод ');
                }
                let userInputConversion = userPromptConversion.toUpperCase();
                const findRateToConversion = data.rates[userInputConversion];
                if (!findRateToConversion) {
                    alert('Вы ввели что-то не верно или не ввели вообще ничего');
                }
                else {
                    const sum = prompt('Введите сумму');
                    if (isNaN(sum) || !sum) {
                        alert('Вы ввели что-то не верно или не ввели вообще ничего');
                    }
                    else if (findRate > findRateToConversion) {
                        alert((sum / findRate).toFixed(2))
                    }
                    else if (findRate < findRateToConversion) {
                        alert((sum * findRateToConversion).toFixed(2))
                    }
                    else {
                        alert(sum)
                    }
                }
            }
        })
}

//Currency drop down


{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            //ця функція запускається коли дані завантажуються.
            //Інший код працює РАНIШЕ.
            //тільки тут є змінна data з завантаженими даними
            console.log(data) // Вивчіть структуру, що отримується з сервера в консолі

            let str = "<select>";
            let currencies = Object.keys(data.rates);
            for (currency of currencies) {
                str += `<option value="${currency}">${currency}</option>`;
            }
            str += "</select>";
            document.write(str);

        })

}


//Currency table

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            //ця функція запускається коли дані завантажуються.
            //Інший код працює РАНIШЕ.
            //тільки тут є змінна data з завантаженими даними
            console.log(data) // Вивчіть структуру, що отримується з сервера в консолі

            const currencyKeys = Object.keys(data.rates);
            const currencies = data.rates;

            let str = "<table border='1'>";
            str += "<th></th>";
            for (const currency of currencyKeys) {
                str += "<th>" + currency + "</th>";
            }

            for (const currencyOuter of currencyKeys) {
                str += `<tr><th>${currencyOuter}</th>`;

                for (const currencyInner of currencyKeys) {
                    if (currencyOuter === currencyInner) {
                        str += "<td>1.00</td>";
                    } else {
                        const rates = 1 / currencies[currencyOuter] * currencies[currencyInner];
                        str += `<td>${rates.toFixed(4)}</td>`;
                    }
                }
            }

            str += "</table>";
            document.write(str);
        })

}


//Form


{
    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": false
    }

    let str = "<form>";

    for (const keys in car) {
        str += `<label> ${keys}: <input type="${(typeof car[keys] === 'number') ? 'number' : (typeof car[keys] === 'string') ? 'text' : 'checkbox'}" value="${car[keys]}"/></label>`
    }

    str += "</form>";
    document.write(str);
}


//Table


{
    const persons = [
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

    const arrKeys = [];
    let str = "<table border='1'>";

    for (const obj of persons) {
        for (const key in obj) {
            if (!arrKeys.includes(key)) {
                str += `<th>${key}</th>`;
                arrKeys.push(key);
            }
        }
    }
    for (const person of persons) {
        str += `<tr>`;
        for (const key of arrKeys) {
            str += `<td>${person[key] === undefined ? '' : person[key]}</td>`
        }
    }

    str += "</tabel>";
    document.write(str);
}