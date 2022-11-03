/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const cars = [
    {
        carBrand: 'BMW',
        price: 30000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Mercedes',
        price: 25000,
        isAvailableForSale: false
    },
    {
        carBrand: 'audi',
        price: 20000,
        isAvailableForSale: true
    }
]

const newCar = {
    carBrand: 'lada',
    price: 5000,
    isAvailableForSale: true
}

cars.push(newCar)
console.log(cars);

console.log(cars);