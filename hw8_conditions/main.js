//blocks 

{
    let a = 10
    {
        let b = 20
        {
            let c = 30
            //какие тут будут значения переменных a,b,c,d   a - 10 , b - 20, c - 30, d - undefined
            b++
            a *= 10
        }
        {
            let c = 50
            //какие тут будут значения переменных a,b,c,d    a - 100, b - 21, c - 50, d - undefined
            b += 500
        }
        {
            const a = 100500
            const d = "value"
            //какие тут будут значения переменных a,b,c,d  a - 100500, b - 521, c - undefined , d - value
            {
                let a = -50
                b = 1000
                //какие тут будут значения переменных a,b,c,d   a = -50, b = 1000, c - undefined, d = value
            }
            //какие тут будут значения переменных a,b,c,d  a = 100500, b = 1000, c - undefined, d = value
        }
        //какие тут будут значения переменных a,b,c,d   a = 100, b = 1000, c - undefined,  d - undefined

    }
    //какие тут будут значения переменных a,b,c,d a = 100, b - undefined, c - undefined,   d - undefined 
}

//comparison if

{
    var age = +prompt("Сколько вам лет?", "");
    if (age < 0) {
        alert("Возраст не может быть отризательным");
    }
    else if (age < 18) {
        alert("школьник");
    }
    else if (age > 18 && age < 30) {
        alert("молодеж");
    }
    else if (age > 30 && age < 45) {
        alert("зрелость");
    }
    else if (age > 45 && age < 60) {
        alert("закат");
    }
    else if (age > 60) {
        alert("как пенсия?");
    }
    else {
        alert("то ли киборг, то ли KERNESS");
    }
}


//switch: sizes

{
    let size = +prompt("Введите размер верхней одежды в нашей системе:");
    let usSize;

    switch (true) {
        case size >= 36 && size <= 38:
            usSize = "XS";
            break;
        case size >= 40 && size <= 42:
            usSize = "S";
            break;
        case size >= 44 && size <= 46:
            usSize = "M";
            break;
        case size >= 48 && size <= 50:
            usSize = "L";
            break;
        default:
            usSize = "Размер не соответствует стандартам";
    }

    alert(`Pазмер  в американской системе:  ${usSize}`);

}

//switch: if

{
    let color = prompt("Введите цвет", "");

    if (color === "red") {
        document.write("<div style='background-color: red;'>красный</div>");
    }
    if (color === "black") {
        document.write("<div style='background-color: black; color: white;'>черный</div>");
        // Пропуск break здесь оставлен как в оригинальном коде
    }
    if (color === "blue") {
        document.write("<div style='background-color: blue;'>синий</div>");
    }
    if (color === "green") {
        document.write("<div style='background-color: green;'>зеленый</div>");
        // Пропуск break здесь оставлен как в оригинальном коде
    }
    if (color !== "red" && color !== "black" && color !== "blue" && color !== "green") {
        document.write("<div style='background-color: gray;'>Я не понял</div>");
    }

}

//noswitch 
//Напишите функцию noSwitch, которая принимает объект со значениями-функциями, ключ для объекта и запускает одну из функций из объекта если ключ найден, иначе - запускает default:


{
    const noSwitch = (key, cases, defaultKey = 'default') => {
        // Проверка наличия ключа в cases
        if (cases.hasOwnProperty(key)) {
            // Если есть - вызываем функцию, соответствующую ключу
            cases[key]();
        } else if (cases.hasOwnProperty(defaultKey) && typeof cases[defaultKey] === 'function') {
            // Если ключ не найден или не является функцией, вызываем функцию по умолчанию
            cases[defaultKey]();
        } else {
            console.error(`Ошибка: Функция для ключа "${key}" не найдена, и функция по умолчанию не определена.`);
        }
    }

    const drink = prompt("Что вы любите пить");
    noSwitch(drink, {
        вода: () => console.log('Самый здоровый выбор!'),
        чай: () => console.log('Вкусная и полезная штука. Не переусердствуйте с сахаром'),
        пиво: () => console.log('Хорошо летом, да в меру'),
        виски: () => console.log('Да вы, батенька, эстет! Не забудьте лед и сигару'),
        default: () => console.log('Что-то я не понял')
    });

}

// closure calc

// Напишите внутри анонимной функции, переданной в then (data =>):
// цикл, который перебирает курсы;
// на каждой итерации создается кнопка (document.createElement)
// текст кнопки - название валюты (innerHTML или innerText)
// Назначьте обработчик события на этой кнопке (onclick = () => {.....}). Функция-обработчик должна быть написана прямо в теле цикла
// Обработчик должен спрашивать сумму используя prompt и переводить эту суммы из валюты, написанной на кнопке в USD
// Найдите замыкания. Для доступа к валютам из data.rates используйте [], . тут не поможет. Кнопки добавляйте в специальный контейнер (div например), созданный в HTML, или, на худой конец, в body


fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        for (key in data.rates) {
            const btn = document.createElement("button");
            btn.textContent = key
            const container = document.getElementById('container');
            container.appendChild(btn);
            btn.addEventListener('click', (event) => {
                const quantity = +prompt(`Сколько ${event.target.textContent} Вы хотите перевести в USD?`)
                if (!isNaN(quantity)) {
                    const res = quantity / data.rates[event.target.textContent];
                    alert(`${res.toFixed(2)} USD`)
                } else {
                    alert('Введите число!')
                }

            });
        }

    })


//closure calc 2

{
    //     Создайте HTML файл с :
    // <select id='from'> - исходная валюта
    // <select id='to'> - валюта в которую происходит обмен
    // <div id='rate'> - кросскурс между валютами
    // <input type='number' id='amount' /> - сумма в исходной валюте
    // <div id='result'> - сумма в валюте, в которую хотим поменять
    // Используя заготовку из предыдущего задания, наполните select-ы тэгами option с названиями валют, используя цикл
    // document.createElement
    // innerText для option
    // from.append или to.append
    // За пределами цикла назначьте обработчики onchange для элементов select и oninput для элемента input, используя их id. По этим событиям обновляйте текст в div#rate и div#result

    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            for (key in data.rates) {
                const from = document.getElementById('from');
                const to = document.getElementById('to');
                const optionFrom = document.createElement('option');
                optionFrom.innerText = key;
                from.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.innerText = key;
                to.appendChild(optionTo);
            }
            from.onchange = calculate;
            to.onchange = calculate;
            document.getElementById('amount').oninput = calculate;

            function calculate() {
                const amount = document.getElementById('amount').value;
                const fromCurrency = from.value;
                const toCurrency = to.value;
                const rate = data.rates[toCurrency] / data.rates[fromCurrency];
                const result = amount * rate;

                document.getElementById('rate').innerText = `Курс обмена: 1 ${fromCurrency} = ${rate.toFixed(2)} ${toCurrency}`;
                document.getElementById('result').innerText = `Результат: ${result.toFixed(2)} ${toCurrency}`;
            }

        })



}

//countries and cities

// По аналогии с предыдущем заданием, реализуйте интерфейс выбора страны и города:
// по закрузке данных наполняйте select#countries элементами option с названиями стран;
// так же назначьте обработчик события onchange в select#countries, который:
// удаляет старый контент select#cities (достаточно занести в innerHTML или innerText пустую строку)
// добавляет в select#cities элементы option с городами из выбранной только что страны.
// Таким образом, при изменении страны будет меняться список городов в select#cities

{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
        .then(res => res.json())
        .then(data => {
            const countriesSelect = document.getElementById('countries');
            const citiesSelect = document.getElementById('cities');

            for (const country in data) {
                const option = document.createElement('option');
                option.value = country;
                option.innerText = country;
                countriesSelect.appendChild(option);
            }


            countriesSelect.onchange = function () {
                citiesSelect.innerHTML = '';

                const selectedCountry = countriesSelect.value;

                const cities = data[selectedCountry];
                for (const city of cities) {
                    const option = document.createElement('option');
                    option.value = city;
                    option.innerText = city;
                    citiesSelect.appendChild(option);
                }
            };
        });

}