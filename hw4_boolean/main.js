

let task = prompt("Введите задание");

if (task === "Number: odd") {

    {
        let str = prompt("Введите число:");
        let number = parseFloat(str);
        if (!isNaN(number)) {
            if (number % 2 === 0) {
                alert("Введено четное число.");
            } else {
                alert("Введено нечетное число.");
            }
        } else {
            alert("Некорректный ввод.");
        }

    }

} else if (task === "String: lexics") {
    let str = prompt("Введите текст:");
    let incorrectWords = ["дурак", "идиот", "сука"];
    for (let i = 0; i < incorrectWords.length; i++) {
        2

        if (str.toLowerCase().indexOf(incorrectWords[i]) !== -1) {
            alert("Текст содержит некорректное слово: " + incorrectWords[i]);
            break;
        }
    }
} else if (task === "Boolean") {
    let answer1 = confirm("Вы любите кофе?");
    let answer2 = confirm("Вы часто путешествуете?");
    let answer3 = confirm("Вы активно занимаетесь спортом?");
    console.log(answer1, answer2, answer3);
} else if (task === "Boolean: if") {
    let answer = confirm("Вы мужчина?");

    if (answer) {
        alert('Вы мужчина')
    } else {
        alert("Вы женщина")
    }
} else if (task === "Comparison: sizes") {
    let size = +prompt("Введите размер верхней одежді в нашей системе:");
    let usSize;
    if (size >= 36 && size <= 38) {
        usSize = "XS";
    } else if (size >= 40 && size <= 42) {
        usSize = "S";
    } else if (size >= 44 && size <= 46) {
        usSize = "M";
    } else if (size >= 48 && size <= 50) {
        usSize = "L";
    }

    alert(`Pазмер обуви в американской системе:  ${usSize}`);
} else if (task === "Ternary") {
    let male = confirm("Вы мужчина?");
    let res = male ? "Вы мужчина" : "Вы женщина";
    alert(res);
} else if (task === "Prompt: or") {
    let age = prompt("Bведите ваш возраст:");
    if (age === null || age === " ") {
        alert("Ошибка!");
    } else {
        console.log(age);
    }
} else if (task === "Confirm: or this days") {
    let shopping = confirm("Шопинг?");
    if (shopping === null || shopping === false) {
        alert("Ты - бяка!");
    }
} else if (task === "Default: or") {
    let firstName = prompt("Введите ваше имя:") || "Иван";
    let lastName = prompt("Введите вашу фамилию:") || "Иванов";
    let middleName = prompt("Введите ваше отчество:") || "Иванович";
    console.log(firstName);
    console.log(lastName);
    console.log(middleName)

} else if (task === "Default: if") {
    let firstName = prompt("Введите ваше имя:");
    if (!firstName) {
        firstName = "Иван";
    }

    let lastName = prompt("Введите вашу фамилию:");
    if (!lastName) {
        lastName = "Иванов";
    }

    let middleName = prompt("Введите ваше отчество:");
    if (!middleName) {
        middleName = "Иванович";
    }

    console.log(firstName);
    console.log(lastName);
    console.log(middleName);
} else if (task === "Login and password") {
    let login = prompt("Введите логин:");

    if (login === "admin") {
        let password = prompt("Введите пароль:");

        if (password === "qwerty") {
            alert("Поздравляем! Вы успешно вошли в систему!");
        } else {
            alert("Ошибка: Неверный пароль!");
        }
    } else {
        alert("Ошибка: Неверный логин!");
    }
} else if (task === "Currency exchange") {
    let currency = prompt("Введите название валюты (например, USD, EUR):").toUpperCase();

    let isBuying = confirm("Вы хотите купить валюту?");

    let rate;

    if (currency === "USD") {
        rate = isBuying ? 37.5 : 39.5;
    } else if (currency === "EUR") {
        rate = isBuying ? 40 : 42;
    } else {
        alert("Извините, мы не обслуживаем эту валюту.");
    }

    if (rate) {
        let amount = +prompt("Введите сумму для обмена:");

        if (!isNaN(amount) && amount > 0) {
            let result = isBuying ? amount * rate : amount / rate;
            alert(`Результат: ${result.toFixed(2)} ${isBuying ? currency : "UAH"}`);
        } else {
            alert("Ошибка!");
        }
    }
} else if (task === "Scissors") {
    let userChoice = prompt("Выберите: камень, ножницы или бумага?").toLowerCase();
    let computerChoice;
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        computerChoice = "камень";
    } else if (randomNumber < 0.67) {
        computerChoice = "ножницы";
    } else {
        computerChoice = "бумага";
    }
    if (userChoice === computerChoice) {
        alert("Ничья!");
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        alert("Вы победили!");
    } else {
        alert("Вы проиграли!");
    }
} else if (task === "Scissors+") {
    let userChoice = prompt("Выберите: камень, ножницы или бумага?").toLowerCase(),
        computerChoice = ["камень", "ножницы", "бумага"][Math.floor(Math.random() * 3)],
        result =
            userChoice === computerChoice ? "Ничья!" :
                (userChoice === "камень" && computerChoice === "ножницы") ||
                    (userChoice === "ножницы" && computerChoice === "бумага") ||
                    (userChoice === "бумага" && computerChoice === "камень") ? "Вы победили!" :
                    "Вы проиграли!";

    alert(result);
}








