

class Fruct {
    constructor(color, size) {
        this.color = color
        this.size = size
        this.type = ""
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
const fructArray = []

for (let i = 0; i < 10; i++){
    const fruct = new Fruct(10, 10)
    fruct.setType("orange")
    fructArray.push(fruct)
}
console.log(fructArray);
for (let i = 0; i < 10; i++){
    const fruct = new Fruct(100, 100)
    fruct.setType("grapefruit")
    fructArray.push(fruct)
}
console.log(fructArray);