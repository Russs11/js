
// переменные

// const x = 1;
// console.log('x: ', x);
// let y = 2;
// console.log('y: ', y);
// y = 3;
// console.log('y2: ', y);
// x = 4;
// console.log('x2: ', x);
// let z = 1.3;
// let f1 = 4;
// let f2 = 5;


// let z1 = "1.3";
// let z2 = '1.3';
// let z3 = `1.3 ${f1 + f2}`;

// let z3 = true;
// let z4 = false;

// let z3 = null;

//операторы

// z3 = -z3;
// let z3 = 7 ** 2;

//преобразование типов

// let z3 = 37 + '2';

//сравнения операторы

// let z3 = 37 >= 2;

// условные операторы

// let z3 = null;

// if (z3 >= 7) {


//логические операторы

// if (z3 || z3 === null) {
//     console.log('больше');
// } else {
//     console.log(' меньше');
// }

// function f1(x, y) {
//     let c = x > y;
//     return c
// }


// console.log('f1 - ', f1(3,2));
// console.log('type - ', typeof(f1));

//задача 1

// TC = (TF – 32)·5 / 9.


let temp = 255;

function tfToTc(tDefault) {
    let t = tDefault;
    let tc = (t - 32) * 5 / 9;
    return tc;
}

console.log('в градусах цельсия - ', tfToTc(temp));