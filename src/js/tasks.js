let fiveArr = [1, 2, 5, 12, 15, 21, 25]
function FiveNumber(arr) {
    let resArr = arr.filter(item => {
        if (item % 5 === 0)
            return item
    })

    // for (i = 0; i < arr.length; i++) {
    //     if (arr[i] % 5 === 0) {
    //         resArr.push(arr[i])
    //     }
    // }
    console.log(resArr)
}
FiveNumber(fiveArr)
FiveNumber([1,3,5,7,9,11,13,15,17,19,21,24,25,30])