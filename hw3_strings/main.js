//greeting

{
    let userName = prompt("Как вас зовут?");
    alert(`Привет, ${userName}! `);

}

//gopni4ek

{
    let str = prompt("Введите строку:");
    let arr = str.split(" ");
    let modifiedStr = arr.join(" блин ");
    alert(modifiedStr);

}

//capitalize

{

    let str = prompt("Введите слово:");
    let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    console.log(result);

}

//word count

{

    let str = prompt("Введите строку:");
    let arr = str.split(" ");
    let wordCount = arr.length;
    console.log(`Количество слов в строке: ${wordCount}`);

}

//credentials

{

    let firstName = prompt("Введите ваше имя:");
    let lastName = prompt("Введите вашу фамилию:");
    let middleName = prompt("Введите ваше отчество:");
    firstName = firstName.trim().charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.trim().charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    middleName = middleName.trim().charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();
    let fullName = firstName + " " + lastName + " " + middleName + " ";
    console.log(fullName);

}

//beer

{

    let str = "Было жарко. Василий пил пиво вприкуску с креветками";
    let result;
    let wordsArray = str.split(" ");
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === "пиво") {
            wordsArray[i] = "чай";
        }
    }
    result = wordsArray.join(" ");
    console.log(result);

}

//no tag

{

    let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
    let start = str.indexOf("<");
    let end = str.indexOf(">") + 1;
    let result = str.slice(0, start) + str.slice(end);
    console.log(result);

}

//big tag

{

    let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
    let start = str.indexOf("<");
    let end = str.indexOf(">") + 1;
    let beforeTag = str.slice(0, start);
    let tag = str.slice(start, end).toUpperCase();
    let afterTag = str.slice(end);
    let result = beforeTag + tag + afterTag;
    console.log(result);

}

//new line

{

    let str = prompt(`Введите строку, используя \\n в качестве маркера новой строки:`);
    str = str.split("\\n").join("\n");
    console.log(str);

}

//youtube

{

    let str = prompt("Введите текст с ссылкой на YouTube видео:");
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = str.match(regex);
    const videoId = match[1];
    const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    document.write(embedCode);

}

