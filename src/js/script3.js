
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

// function Gender(m, f) {
//     if (m === "M" && f === "F") {
//         console.log("Ваш пол мужской " + "," + " " + "Ваш пол женский ")
//     }
//     else {
//         if (m !== "M" && f === "F")
//             console.log("Ваш пол не определен  " + "," + " " + "Ваш пол женский ")
//         if (m === "M" && f !== "F")
//             console.log("Ваш пол мужской " + "," + " " + "Ваш пол не определен  ")
//     }
// }
// Gender("M", "F")


// Задача №4

function DayOfWeek(day) {

    if (day === 1){
        console.log("Понедельник ")
    } if (day === 2) {
        console.log("Вторник ")
    } if (day === 3) {
        console.log("Среда ")
    } if (day === 4) {
        console.log("Четверг ")
    } if (day === 5) {
        console.log("Пятница ")
    } if (day === 6) {
        console.log("Суббота ")
    } if (day === 7) {
        console.log("Воскресенье ")
    } else {
        if (day > 7) {
            console.log("Введите число от 1 до 7 ")
        }
        if (day < 1) {
            console.log("Введите число от 1 до 7 ")
        }
    }
}

DayOfWeek (1)