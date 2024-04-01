//createPerson


{
    function createPerson(name, surname) {
        return {
            name: name,
            surname: surname,
            getFullName: function () {
                if (this.fatherName) {
                    return `${this.name} ${this.fatherName} ${this.surname}`;
                } else {
                    return `${this.name} ${this.surname}`;
                }
            }
        }
    }
    const a = createPerson("Вася", "Пупкин")
    const b = createPerson("Анна", "Иванова")
    const c = createPerson("Елизавета", "Петрова")

    console.log(a.getFullName()) //Вася Пупкин
    a.fatherName = 'Иванович'    //Вася Иванович Пупкин
    console.log(a);

    console.log(b.getFullName()) //Анна Иванова
}
{
    function createPersonClosure(name, surname) {

        let fullName = name + ' ' + surname;
        let [firstName, lastName] = fullName.split(' ');
        let fatherName = '';
        let age = 0;

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        return {
            getName: function () {
                return capitalize(name);
            },

            getSurname: function () {
                return capitalize(surname);
            },

            getFatherName: function () {
                return capitalize(fatherName);
            },

            getAge: function () {
                return age;
            },

            getFullName: function () {
                let full = `${capitalize(name)} ${capitalize(surname)}`;
                if (fatherName) {
                    full += ` ${capitalize(fatherName)}`;
                }
                return full;
            },

            setName: function (newName) {
                name = capitalize(newName);
                return name;
            },

            setSurname: function (newSurname) {
                surname = capitalize(newSurname);
                return surname;
            },

            setFatherName: function (newFatherName) {
                fatherName = capitalize(newFatherName);
                return fatherName;
            },

            setAge: function (newAge) {
                if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
                    age = newAge;
                }
                return age;
            },

            setFullName: function (fullName) {
                const parts = fullName.split(' ');
                const length = parts.length;
                if (length >= 1) {
                    surname = capitalize(parts[length - 1]) || 'Анонімович';
                }
                if (length >= 2) {
                    name = capitalize(parts.slice(0, length - 1).join(' ')) || 'Анонім';
                }
                if (length >= 3) {
                    fatherName = capitalize(parts[length - 2]) || '';
                }
            }
        }
    }

    const a = createPersonClosure("Вася", "Пупкін")
    const b = createPersonClosure("Ганна", "Іванова")
    console.log(a.getName())
    a.setAge(15)
    console.log(a.setAge(150))
    b.setFullName("Петрова Ганна Миколаївна")
    console.log(b.getFatherName())
}

{
    function createPersonClosureDestruct(userInfo) {

        let { name = 'Анонім', surname = 'Анонімус', fatherName = 'Анонімович', age = 1 } = userInfo;

        return {
            getName: function () {
                return name;
            },

            getSurname: function () {
                return surname;
            },

            getFatherName: function () {
                return fatherName;
            },

            getAge: function () {
                return age;
            },

            getFullName: function () {
                if (fatherName) {
                    return `${name} ${fatherName} ${surname}`;
                } else {
                    return `${name} ${surname}`;
                }
            },

            setName: function (newName) {
                name = newName;
            },

            setSurname: function (newSurname) {
                surname = newSurname;
            },

            setFatherName: function (newFatherName) {
                fatherName = newFatherName;
            },

            setAge: function (newAge) {
                if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
                    age = newAge;
                }
            },

            setFullName: function (fullName) {
                const parts = fullName.split(' ');
                const length = parts.length;
                if (length >= 1) {
                    surname = parts[length - 3];
                }
                if (length >= 2) {
                    name = parts.slice(0, length - 2).join(' ');
                }
                if (length >= 3) {
                    fatherName = parts[length - 1];
                }
            }
        }

    }
    const b = createPersonClosureDestruct({ name: 'Миколай', age: 75 });
    console.log(b.getSurname());

}

{
    function isSorted(...args) {
        if (!args.length) {
            return false;
        }
        const isEveryNumber = args.every((element) => !isNaN(element));
        if (!isEveryNumber) {
            return false;
        }
        for (let i = 0; i < args.length - 1; i++) {

            if ((args[i] > args[i + 1]))
                return false;

        }
        return true;
    }

    const arr = [];

    while (true) {
        const input = prompt("Введите элемент массива:");

        if (input === null || input === "") {
            break;
        }

        arr.push(input);
    }

    console.log(isSorted(...arr));
}

{
    function createPersonClosure(name, surname) {

        let fullName = name + ' ' + surname;
        let [firstName, lastName] = fullName.split(' ');
        let fatherName = '';
        let age = 0;

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        return {
            getName: function () {
                return capitalize(name);
            },

            getSurname: function () {
                return capitalize(surname);
            },

            getFatherName: function () {
                return capitalize(fatherName);
            },

            getAge: function () {
                return age;
            },

            getFullName: function () {
                let full = `${capitalize(name)} ${capitalize(surname)}`;
                if (fatherName) {
                    full += ` ${capitalize(fatherName)}`;
                }
                return full;
            },

            setName: function (newName) {
                name = capitalize(newName);
                return name;
            },

            setSurname: function (newSurname) {
                surname = capitalize(newSurname);
                return surname;
            },

            setFatherName: function (newFatherName) {
                fatherName = capitalize(newFatherName);
                return fatherName;
            },

            setAge: function (newAge) {
                if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
                    age = newAge;
                }
                return age;
            },

            setFullName: function (newFullName) {
                const parts = newFullName.split(' ');
                const length = parts.length;
                if (length >= 1) {
                    surname = capitalize(parts[length - 1]) || '';
                }
                if (length >= 2) {
                    name = capitalize(parts[0]) || '';
                }
                if (length >= 3) {
                    fatherName = capitalize(parts[length - 2]) || '';
                }
                return this.getFullName();
            }
        }
    }

    function personForm(parent, person) {
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.value = person.getName();
        parent.appendChild(nameInput);

        const surnameInput = document.createElement('input');
        surnameInput.setAttribute('type', 'text');
        surnameInput.value = person.getSurname();
        parent.appendChild(surnameInput);

        const fatherNameInput = document.createElement('input');
        fatherNameInput.setAttribute('type', 'text');
        fatherNameInput.value = person.getFatherName();
        parent.appendChild(fatherNameInput);

        const ageInput = document.createElement('input');
        ageInput.setAttribute('type', 'number');
        ageInput.value = person.getAge();
        parent.appendChild(ageInput);

        const fullNameInput = document.createElement('input');
        fullNameInput.setAttribute('type', 'text');
        fullNameInput.value = person.getFullName();
        parent.appendChild(fullNameInput);

        nameInput.addEventListener('input', () => {
            person.setName(nameInput.value);
            nameInput.value = person.getName();
        });

        surnameInput.addEventListener('input', () => {
            person.setSurname(surnameInput.value);
            surnameInput.value = person.getSurname();
        });

        fatherNameInput.addEventListener('input', () => {
            person.setFatherName(fatherNameInput.value);
            fatherNameInput.value = person.getFatherName();
        });

        ageInput.addEventListener('input', () => {
            const age = parseInt(ageInput.value);
            if (!isNaN(age) && age >= 0 && age <= 100) {
                person.setAge(age);
            } else {
                ageInput.value = person.getAge();
            }
        });

        fullNameInput.addEventListener('input', () => {
            const newFullName = fullNameInput.value;
            const updatedFullName = person.setFullName(newFullName);
            fullNameInput.value = updatedFullName;
            const parts = updatedFullName.split(' ');
            if (parts.length === 3) {
                nameInput.value = parts[0];
                surnameInput.value = parts[1];
                fatherNameInput.value = parts[2];
            }
        });
    }

    const parentElement = document.createElement('div');
    document.body.appendChild(parentElement);

    const b = createPersonClosure("Ганна", "Іванова");
    b.setAge(15);
    b.setFullName("Петрова Ганна Миколаївна");

    personForm(parentElement, b);
}

{
    function getSetForm(parent, getSet) {
        const inputs = {};

        const updateInputs = () => {
            for (const fieldName in inputs) {
                const getKey = "get" + fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
                if (getSet.hasOwnProperty(getKey)) {
                    inputs[fieldName].value = getSet[getKey]();
                }
            }
        };

        for (const getSetName in getSet) {
            const getOrSet = typeof getSet[getSetName] === 'function' ? 'get' : 'set';
            const fieldName = getSetName.replace(/^(get|set)/, '');
            if (getOrSet === "get") {
                const input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.placeholder = fieldName;
                parent.appendChild(input);
                inputs[fieldName.toLowerCase()] = input;

                input.addEventListener('input', () => {
                    const setKey = "set" + fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
                    if (getSet.hasOwnProperty(setKey)) {
                        getSet[setKey](input.value);
                        updateInputs();
                    }
                });
            }
        }

        updateInputs();
    }

    let car = {
        getBrand() {
            return "BMW";
        },
        setBrand(newBrand) {
            console.log("Setting brand to", newBrand);
        },
        getModel() {
            return "X5";
        },
        setModel(newModel) {
            console.log("Setting model to", newModel);
        },
        getVolume() {
            return 2.4;
        },
        setVolume(newVolume) {
            console.log("Setting volume to", newVolume);
        }
    };

    getSetForm(document.body, car);
}   