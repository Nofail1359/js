//while confirm

{
    let a = false;

    while (!a) {
        a = confirm("Cогласитесь со мной");
    }

}

//array fill

{
    const arr = [];

    while (true) {
        const input = prompt("Введите элемент массива:");

        if (input === null || input === "") {
            break;
        }

        arr.push(input);
    }

    console.log(arr);

}

//array fill nopush

{
    const arr = [];
    let index = 0;

    while (true) {
        const userInput = prompt("Введите элемент массива:");


        if (userInput === null || userInput === "") {
            break;
        }

        arr[index] = userInput;
        index++;
    }

    console.log(arr);

}


//infinite probability


{
    let iterations = 0;

    while (true) {
        iterations++;
        if (Math.random() > 0.9) {
            break;
        }
    }

    alert(`Количество итераций:  ${iterations}`);

}

//empty loop


{
    do {
        var userInput = prompt("Введите что-то:");
    } while (userInput == null);

}

//progression sum

{

    let N = 10;
    let sum = 0;
    for (let i = 1; i <= N; i += 3) {
        sum += i;
    }
    console.log(sum);

}

//chess one line

{
    const length = 7;

    let result = "";
    for (let i = 0; i < length; i++) {
        result += " #";
    }
    console.log(result);

}

//numbers

{
    let result = "";
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            result += j;
        }
        result += "\n";
    }
    console.log(result);

}

//chess

{
    const rows = 10;
    const cols = 11;
    let result = "";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if ((i + j) % 2 === 0) {
                result += ".";
            } else {
                result += "#";
            }
        }
        result += "\n";
    }
    console.log(result);

}

//cubes

{
    const n = 10;


    let cubes = [];

    for (let i = 0; i < n; i++) {
        cubes.push(i ** 3);
    }

    console.log(cubes);

}

//multiply table

{
    let multiplicationTable = [];

    for (let i = 0; i <= 10; i++) {
        multiplicationTable[i] = [];

        for (let j = 0; j <= 10; j++) {
            multiplicationTable[i][j] = i * j;
        }
    }


    console.log(multiplicationTable);
    console.log(multiplicationTable[5][6]);
    console.log(multiplicationTable[7][2]);


}

//read array of objects


{
    //     Напишите функцию readArrayOfObjects, которая циклически добавляет в массив объекты, которые ввел пользователь. 
    // Пользователь вводит ключи и значения (их в каждом объекте может быть любое количество), используя prompt. Когда пользователь нажимает "Отмена" в окне prompt,
    //  ввод объекта заканчивается и объект добавляется в массив. Перед вводом следующего объекта пользователю задается вопрос (используя confirm), 
    //  хочет ли он продолжить это мучение ввод объектов. При утвердительном ответе, опять работает ввод любюго количества ключей для создания нового объекта
    // Функция должна возвращать созданный массив с объектами.
    function readArrayOfObjects() {
        let arrayOfObjects = [];
        let continueInput = true;

        while (continueInput) {
            let obj = {};

            while (true) {
                let key = prompt("Введите ключ :");
                if (key === null) break;

                let value = prompt(`Введите значение для ключа "${key}":`);
                if (value === null) break;

                obj[key] = value;
            }

            arrayOfObjects.push(obj);

            continueInput = confirm("Хотите добавить еще один объект?");
        }

        return arrayOfObjects;
    }

    readArrayOfObjects();

}

//ромбик

{
    let rows = 6;
    let diamond = '';


    for (let i = 1; i <= rows; i++) {
        let spaces = '.'.repeat(rows - i);
        let hashes = '#'.repeat(2 * i - 1);
        diamond += spaces + hashes + spaces + '\n';
    }

    for (let i = rows - 1; i >= 1; i--) {
        let spaces = '.'.repeat(rows - i);
        let hashes = '#'.repeat(2 * i - 1);
        diamond += spaces + hashes + spaces + '\n';
    }

    console.log(diamond);

}

//DOM: multiply table

{
    let table = document.createElement('table');
    let caption = table.createCaption();
    caption.innerText = 'Таблица умножения';

    for (let i = 0; i <= 9; i++) {
        let row = table.insertRow();

        for (let j = 0; j <= 9; j++) {
            let cell = row.insertCell();

            cell.innerText = (i === 0 || j === 0) ? (i + j).toString().padStart(3, ' ') : (i * j).toString().padStart(3, ' ');
        }
    }


    document.body.appendChild(table);



    table.style.borderCollapse = 'collapse';

    let rows = table.getElementsByTagName('tr');
    let cells = table.getElementsByTagName('td');

    for (let i = 0; i < rows.length; i++) {
        rows[i].style.border = '1px solid black';
    }

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.border = '1px solid black';
        cells[i].style.padding = '5px';
    }

    //DOM: highlight cell
    //DOM: Highlight cross



    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = 'yellow';

            let rowIndex = this.parentNode.rowIndex;
            let cellIndex = this.cellIndex;

            let row = this.parentNode;
            for (let j = 0; j < row.cells.length; j++) {
                row.cells[j].style.backgroundColor = 'lightblue';
            }

            let table = row.parentNode;
            for (let j = 0; j < table.rows.length; j++) {
                table.rows[j].cells[cellIndex].style.backgroundColor = 'lightgreen';
            }
        });

        cells[i].addEventListener('mouseout', function () {
            this.style.backgroundColor = '';

            let row = this.parentNode;
            for (let j = 0; j < row.cells.length; j++) {
                row.cells[j].style.backgroundColor = '';
            }

            let table = row.parentNode;
            for (let j = 0; j < table.rows.length; j++) {
                table.rows[j].cells[this.cellIndex].style.backgroundColor = '';
            }
        });
    }
}

