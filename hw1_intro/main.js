//Calc

let electricity = +prompt("Введите количество использованных килловат за месяц");
let watter = +prompt("Введите количество использованных кубов водды за месяц");

let electricityCout = electricity * 2.84;
let watterCout = watter * 24.5;
let res = electricityCout + watterCout;

alert(`За месяц необходимо оплатить: ${res}грн `);

//login

let credentials = {
    login: 'admin',
    password: 'qwerty',
};

let login = prompt("Введите логин:");
let password = prompt("Введите пароль");

if (login === credentials.login && password === credentials.password) {
    document.addEventListener('DOMContentLoaded', function () {
        let newDiv = document.createElement("div");
        newDiv.textContent = "Успешно!";
        newDiv.style.height = "200px";
        newDiv.style.width = "200px";
        newDiv.style.backgroundColor = "green";
        newDiv.style.padding = "10px";
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(newDiv);
    });
} else {
    document.addEventListener('DOMContentLoaded', function () {
        let newDiv = document.createElement("div");
        newDiv.textContent = "Вы ввели неверные данные!";
        newDiv.style.height = "200px";
        newDiv.style.width = "200px";
        newDiv.style.backgroundColor = "red";
        newDiv.style.padding = "10px";
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(newDiv);
    });
}