let fiveArr = [1, 2, 5, 12, 15, 21, 25]
function FiveNumber(arr) {
    let resArr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 5 === 0) {
            arr.push(arr[i])
        }
    }
    console.log(resArr)
}
FiveNumber(fiveArr)
// FiveNumber([1,3,5,7,9,10,13,15])