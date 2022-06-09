
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
function Hello(name, lastname, age) {

    if (!(typeof Number(name) === "string" )) {
        
        console.log("Вы ввели число вместо имени ");
    } else {
        if (age < 5) {
            console.log("Привет " + name + " " + lastname + " с возрастом " + age + " года")
        } else {
            console.log("Привет " + name + " " + lastname + " с возрастом " + age + " лет")

        }
    }
    if (!(typeof Number(lastname) === "string")) {
        console.log("Вы ввели число вместо фамилии ");
    } else {
        if (age < 5) {
            console.log("Привет " + name + " " + lastname + " с возрастом " + age + " года")
        } else {
            console.log("Привет " + name + " " + lastname + " с возрастом " + age + " лет")

        }
    }



}
Hello("Иван", "7", "6")