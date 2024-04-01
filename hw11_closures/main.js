//makeProfileTimer

{
    function makeProfileTimer() {
        // Запоминаем время начала выполнения кода
        const startTime = performance.now();

        // Возвращаем функцию, которая будет возвращать время прошедшее от вызова makeProfileTimer до вызова этой функции
        return function () {
            // Вычисляем время, прошедшее с момента вызова makeProfileTimer до текущего момента
            const time = performance.now() - startTime;
            return time;
        };
    }

    // Пример использования
    var timer = makeProfileTimer();
    alert('Замеряем время работы этого alert');
    alert(timer()); // Выведет время в миллисекундах от выполнения makeProfileTimer до момента вызова timer()

}

{
    //makeSaver
    function makeSaver(func) {
        let result;

        return function () {
            if (result === undefined) {
                result = func();
            }
            return result;
        };
    }

    var saver = makeSaver(Math.random);
    var value1 = saver(); // saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
    var value2 = saver(); // saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную в makeSaver функцию
    console.log(value1 === value2);

    var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random() * 6)]);
    var value3 = saver2();
    var value4 = saver2();
    console.log(value3 === value4);

    let namePrompt = prompt.bind(window, 'Как тебя зовут?');
    let nameSaver = makeSaver(namePrompt);
    alert(`Привет! Prompt еще не было!`);
    alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`);
    alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`);

}

{
    //myBind

    function myBind(func, context, defaultArgs) {
        return function (...args) {
            const allArgs = defaultArgs.map((defaultValue, index) => typeof args[index] !== 'undefined' ? args[index] : defaultValue);
            return func.apply(context, allArgs);
        };
    }


    var pow5 = myBind(Math.pow, Math, [undefined, 5]);
    console.log(pow5(2));

    var cube = myBind(Math.pow, Math, [undefined, 3]);
    console.log(cube(3)); // => 27

    var chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9]);
    console.log(chessMin(-1, -5, 3, 15));

    var zeroPrompt = myBind(prompt, window, [undefined, "0"]);
    var someNumber = zeroPrompt("Введите число");
    console.log(someNumber);

    const bindedJoiner = myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f']);
    console.log(bindedJoiner('a', 'c', 'd'));
    console.log(bindedJoiner('1', '2', '3'));

}

//checkResult

{
    function checkResult(original, validator) {
        function wrapper(...params) {
            let result;
            do {
                result = original.apply(this, params);
            } while (!validator(result));
            return result;
        }
        return wrapper;
    }
    //numberPrompt - это функция, которая будет запускать prompt до тех пор, пока пользователь не введет число
    const numberPrompt = checkResult(prompt, x => !isNaN(+x))
    let number = +numberPrompt("Введите число", "0")  //параметры передаются насквозь в оригинал. Не забудьте передать this, используя call или apply

    //gamePrompt - это функция, которая будет запускать prompt до тех пор, пока пользователь не введет одно из слов 'камень', 'ножницы', 'бумага'
    const gamePrompt = checkResult(prompt, x => ['камень', 'ножницы', 'бумага'].includes(x.toLowerCase()))
    const turn = gamePrompt("Введите что то из списка: 'камень', 'ножницы', 'бумага'")

    function randomHigh() {
        return Math.random() * 0.5 + 0.5;
    }

    const randomHighPrompt = checkResult(randomHigh, x => x >= 0.5 && x <= 1);

    function alwaysSayYes() {
        return confirm("Вы согласны?");
    }

    const alwaysSayYesPrompt = checkResult(alwaysSayYes, x => x);

    const randomNumber = randomHighPrompt();
    console.log("Случайное число в диапазоне от 0.5 до 1:", randomNumber);

    alwaysSayYesPrompt();
    console.log("Пользователь согласился.");


    function getFullName() {
        let firstName = prompt("Введите ваше имя:");
        let lastName = prompt("Введите вашу фамилию:");
        let middleName = prompt("Введите ваше отчество:");



        if (firstName && lastName && middleName) {
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

        } else {
            getFullName();
        }
    }
    function isAllFieldsFilled(credentials) {
        return credentials !== null;
    }

    function respectMe() {
        return checkResult(getFullName, isAllFieldsFilled)();
    }
    respectMe()

}

