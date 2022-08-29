
// let whatDayArr = []
// function AddDaysInArr(arr) {
//     for (i = 365; i > 0; i--) {
//         const whatDay = (Math.random())
//         if (whatDay < 0.5) {
//             arr[i] = false
//         }
//         if (whatDay > 0.5) {
//             arr[i] = true
//         }
//     }
//     // console.log(arr);
// }
// AddDaysInArr(whatDayArr)

// class Snail {
//     name;
//     heightOnTree;

//     constructor(name, height) {
//         this.name = name
//         this.heightOnTree = height
//     }

//     getName() {
//         return this.name
//     }
//     getHeightOnTree() {
//         return this.heightOnTree
//     }
//     setHeightOnTree(value) {
//         this.heightOnTree = value
//     }
//     goUp() {
//         this.heightOnTree += (Math.round(Math.random() * (10 - 1) + 1))
//     }
//     goDown() {
//         this.heightOnTree -= (Math.round(Math.random() * (10 - 1) + 1))
//     }
//     greating() {
//         console.log("Hello");
//     }
// }
// class Tree {
//     height = 300
//     snailArr;
//     daysArr;
//     constructor(snailArr, daysArr) {
//         this.snailArr = snailArr
//         this.daysArr = daysArr
//     }
//     SnailsToGo() {
//         for (let i = 0; i < this.daysArr.length; i++) {
//             if (this.daysArr[i]) {
//                 this.snailArr.forEach(item => {
//                     item.goUp()
//                 })
//             } else {
//                 this.snailArr.forEach(item => {
//                     item.goDown()
//                 })
//             }
//             this.SnailLimits()
//         }
//     }
//     WhereSnailsAre() {
//         // console.log(this.snailArr.length);
//         for (let i = 0; i < this.snailArr.length; i++) {
//             console.log(this.snailArr[i].getName(), this.snailArr[i].getHeightOnTree())
//         }
//     }
//     SnailLimits() {
//         this.snailArr.forEach(item => {
//             if (item.getHeightOnTree() > this.height) {
//                 item.setHeightOnTree(this.height)
//             }
//             if (item.getHeightOnTree() < 0) {
//                 item.setHeightOnTree(0)
//             }
//         })
//     }
// }
// function f1(s1, s2, s3, arr) {
//     arr.forEach(item => {
//         if (item) {
//             s1.goUp()
//             s2.goUp()
//             s3.goUp()
//         } else {
//             s1.goDown()
//             s2.goDown()
//             s3.goDown()
//         }
//     })
//     console.log(`${s1.getName()} - `, s1.getHeightOnTree());
//     console.log(`${s2.getName()} - `, s2.getHeightOnTree());
//     console.log(`${s3.getName()} - `, s3.getHeightOnTree());
// }

// const snail1 = new Snail("Вася", 100)
// const snail2 = new Snail("Петя", 130)
// const snail3 = new Snail("Сеня", 140)
// const tree = new Tree([snail1, snail2, snail3], whatDayArr)

// tree.SnailsToGo()
// tree.WhereSnailsAre()
// f1(snail1, snail2, snail3, whatDayArr)


// let dayWeather = ""
// let snail = 100
// function SnailOnTree() {
//     for (i = 0; i < 365; i++) {
//         const whatDay = (Math.random())
//         if (whatDay < 0.3) {
//             dayWeather = false
//         }
//         if (whatDay > 0.7) {
//             dayWeather = true
//         }
//         whatDayArr.push(dayWeather)
//     }
//     for (j = 0; j < whatDayArr.length; j++) {
//         if (whatDayArr[j] === true) {
//             snail += 2
//             if (snail > 300) {
//                 snail = 300
//             }
//         }
//         else {
//             snail -= 3
//             if (snail <= 0) {
//                 snail = 0
//             }
//         }
//     }
//     console.log(snail)
// }
// SnailOnTree()


// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth() + 1;
// let yyyy = today.getFullYear();
// if (dd < 10) {
//     dd = '0' + dd;
// }
// if (mm < 10) {
//     mm = '0' + mm;
// }
// let day = dd + '.' + mm + '.' + yyyy;
// function Whatday() {
//     console.log(day);
// }
// Whatday()

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example(Input-- > Output):

// 39 -- > 3(because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit)
// 999 -- > 4(because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2)
// 4 -- > 0(because 4 is already a one - digit number)
function persistence(num) {
    let numArr = []
    numArr = ('' + num).split('')
    console.log(numArr.map(Number))
    let result = 1
    for (let i = 0; i < numArr.length; i++) {
        result *= numArr[i]
    }
    console.log(result);

}
persistence(999)