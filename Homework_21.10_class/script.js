// Напишите класс NumberArray, который будет содержать сво-во array. В качестве значения св-ва необходимо сформировать массив с числовыми типами.
// К этому классу напишите список методов: 
// getLastElem(). Метод должен всегда возвращать последний элемент массива
// getAbs(). Метод должен возвращать абсолютное значение разницы первого и последнего элемента 
// getSum(). Метод должен возвращать сумму всех элементов сво-ва array
// setArray(n). Метод должен переопределить сво-во array на новый массив, где каждый элемент будет умножен на аргумент n.
// createObject(). Метод должен вернуть объект c количеством сво-йств равному количеству элементов массива сво-ва array. В качестве ключа сформируйте значение elem{n} 
// Пример:
// Пример сво-ва
// array: [10,20,30,40]

// Пример результата

// {
// elem1: 10,
// elem2: 20,
// elem3: 30,
// elem4: 40
// }

// Обратите внимание на то, что к сво-вам объекта можно обращаться через квадратные скобки, например, obj[‘name’] (аналог obj.name)
const arr = [10, 20, 30, 40]

// console.log('test', Math.abs(arr[0] - arr[arr.length-1]), arr[0], arr[arr.length-1])

class NumberArray { 
    constructor() { 
        this.arr = [10, 20, 30, 40];
    } 
    getLastElem(){
        return this.arr[this.arr.length-1];
    } 

    getAbs() { 
        return Math.abs(this.arr[0] - this.arr[this.arr.length-1]); 
     }

    getSum(){
        return this.arr.reduce( (acc, elem) => acc + elem, 0)  
    }

    setArray(n){
        return this.arr.map(elem => elem * n)
    }

    
    createObject(){
         let obj = {}
        for(let i = 0; i < this.arr.length; i ++){
            obj['elem' + (i+1)]= this.arr[i]
        }
        return obj
    }
}

let numb = new NumberArray()
console.log(numb);   //{ arr: [ 10, 20, 30, 40 ] }

console.log(numb.getLastElem())  //40
console.log(numb.getSum())  //100
console.log(numb.getAbs())  //30
console.log(numb.setArray(5))  //[ 50, 100, 150, 200 ]

console.log(numb.createObject(5))  //{ elem1: 10, elem2: 20, elem3: 30, elem4: 40 }