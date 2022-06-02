

class Fruct {
    constructor(color, size, number) {
        this.color = color
        this.size = size
        this.type = ""
        this.number = number
    }
    getColor() {
        return this.color
    }
    getSize() {
        return this.size
    }
    getType() {
        return this.type
    }
    getNumber() {
        return this.number
    }
    setNumber(number) {
        this.number = number
    }
    setColor(color) {
        this.color = color
    }
    setSize(size) {
        this.size = size
    }
    setType(type) {
        this.type = type
    }

}
let count = 0 
const fructArray = []
const o = "orange"
const g = "grapefruit"
for (let i = 0; i < 10; i++) {
    const fruct = new Fruct(Math.round(Math.random() * (10 - 0) + 0), Math.round(Math.random() * (10 - 0) + 0), count++)
    fruct.setType(o)
    fructArray.push(fruct)
}
console.log(fructArray);
for (let i = 0; i < 10; i++) {
    const fruct = new Fruct(Math.round(Math.random() * (100 - 90) + 90), Math.round(Math.random() * (100 - 90) + 90), count++)
    fruct.setType(g)
    fructArray.push(fruct)
}
console.log(fructArray);

function Neighbors(x1, y1, x2, y2) {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    return distance
}

function whatFruct (x, arrFruct)

