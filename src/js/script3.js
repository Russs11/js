
// function squareItUp(startingNumber) {
//     square = startingNumber * startingNumber;
//     if (square > 1000000) {
//     console.log(square);
//     } else {
//         squareItUp(square);
//     }
// }
// squareItUp(333)




// Задача №1
// function multiplication(a,b) {
//     s = a * b;
//     console.log(s);
// }
// multiplication(78, 38)

// Задача №2
// function Hello(name, lastname, age) {

//     if (typeof Number(name) === "string") {
//         console.log("Вы не ввели именя ");
//     } else {
//         if (age < 5) {
//             console.log("Привет " + name + " " + lastname + " с возрастом " + age + " года")
//         } else {
//             console.log("Привет " + name + " " + lastname + " с возрастом " + age + " лет")

//         }
//     }
//     if (typeof Number(lastname) === "string") {
//         console.log("Вы ввели число вместо фамилии ");
//     } else {
//         if (age < 5) {
//             console.log("Привет " + name + " " + lastname + " с возрастом " + age + " года")
//         } else {
//             console.log("Привет " + name + " " + lastname + " с возрастом " + age + " лет")

//         }
//     }
// }
// Hello("7", "Петров", "3")


// Задача №3

// function Gender(g) {
//     if (g === "M") {
//         console.log("Ваш пол мужской ")
//     } else if (g === "F") {
//         console.log("Ваш пол женкский ")
//     }
//     else {
//         console.log("Ваш пол неопределен ")
//     }
// }
// Gender("M")
// Gender("F")
// Gender("r")


// Задача №4

// function DayOfWeek(day) {

//     if (day === 1){
//         console.log("Понедельник ")
//     } if (day === 2) {
//         console.log("Вторник ")
//     } if (day === 3) {
//         console.log("Среда ")
//     } if (day === 4) {
//         console.log("Четверг ")
//     } if (day === 5) {
//         console.log("Пятница ")
//     } if (day === 6) {
//         console.log("Суббота ")
//     } if (day === 7) {
//         console.log("Воскресенье ")
//     } else {
//         if (day > 7) {
//             console.log("Введите число от 1 до 7 ")
//         }
//         if (day < 1) {
//             console.log("Введите число от 1 до 7 ")
//         }
//     }
// }

// DayOfWeek (1)

// задача №5

let text = "Иногда нам нужно выполнить различные действия в зависимости от условий. Для этого мы можем использовать инструкцию if и условный оператор ?, который также называют оператором «вопросительный знак». Исследуемый документ выполнен с одной стороны двух листов бумаги светло-жёлтого цвета, размерами 200х290 мм, Печатный текст в документе выполнен красящим веществом чёрного цвета. В верхней правой части листов имеется рукописная запись в виде цифрового обозначения «115», «116», соответственно, выполненные красящим веществом серого цвета. в средней части второго листа документа под основным текстом расположен оттиск круглой гербовой печати от имени Молодежненского поселкового Совета народных депутатов, нанесенный фиолетовым красящим веществом, и две подписи, выполненные светло-синим и фиолетовым красящими веществами. В нижней правой части каждого листа документа расположен оттиск штампа «ЭКЦ - Исследуемый», нанесенный светло-синим красящим веществом. На втором листе документа в месте расположения штампа «ЭКЦ - Исследуемый», расположена подпись, выполненная красящим веществом сине-фиолетового цвета."

function firstWord(text) {
    let accum = ""
    let reg = /[А-Я]/
    let save = false
    let splits = text.split('.',);
    console.log(splits);
    for (i = 0; i < splits.length; i++){
       
        for (j = 0; j < splits[i].length; j++){
            if (splits[i][j].match(reg))
                save = true
                if (splits[i][j] === " ") {
                    save = false
                }
                if (splits[i][j] === ",") {
                    save = false
                }
            if (save) {
                accum = accum + splits[i][j]
            }
        }
    }
    console.log(accum);
}

firstWord(text);