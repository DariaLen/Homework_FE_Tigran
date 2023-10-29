// Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте геттер validPhone, 
//которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, 
//геттер validPhone должно принять булевое значение false, в противном случае — true. 
//Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. 
// Пример значений переменных: 

// let name = "Pizza" 
// let phone = "81234567890" 

// Пример результата: false

class Delivery {
    constructor(name,phone){
        this.name = name;
        this.phone = phone;
     

    }

    get validPhone(){
    //  return this.phone.includes('+') ? true : false;
    return this.phone.slice(0,1) == '+'  && this.phone.length == 14 ? true : false;
    }
}

const newDelivery = new Delivery('Pizza', '+4917640478344');
console.log(newDelivery.validPhone)



// В программе создан класс Permissions, свойства которого описывают права пользователей на 
// редактирование статей на сайте. Создайте новый класс Users, который н
// аследуется от класса Permissions. Дополнительно в классе Users добавьте свойство name, 
// значение которого класс принимает в качестве аргумента конструктора.



class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}

class Users extends Permissions {
    constructor(create, read, update, remove, name){
        super(create, read, update, remove)
        this.name = name;
    }
}


// Все печатные издания имеют название, год издания, состоят из определенного количества
//  страниц, а ещё могут портиться. 
// Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type. 

class PrintEditionItem{

    constructor(name, releaseDate, pagesCount, state, type){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;  //100
        this.type = type;     //null

        // type = null;
        // state = 100;
    }

    fix(){
        return this.state * 1.5;
    }

    set setState(newState){
        if(newState < 0){
             this.state = 0 
        }if(newState > 100 ){
            this.state = 100
        } else {
            this.state = newState
        }
    }

    get getState(){
        return this.state   //???????????
    }
}


const printEditionItem = new PrintEditionItem("newPiper", 2001, 124, 100, null)
console.log(printEditionItem)
printEditionItem.setState = 50
// console.log(printEditionItem.setState(0))
console.log(printEditionItem)


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state, type)
        this.type = 'magazin';
    }
}

const magazine = new Magazine('newPiper', 2001, 124, 30)
console.log(magazine)


class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type,author){
        super(name, releaseDate, pagesCount, state, type)
        this.type = 'book';
        this.author = author;
    }
}
const book = new Book('newPiper', 2001, 124, 30, null, "Mikhelin")
console.log(book)

class NovelBook extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type,author){
        super(name, releaseDate, pagesCount, state, type)
        this.type = 'novel';
        this.author = author;
    }
}

class FantasticBook extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type,author){
        super(name, releaseDate, pagesCount, state, type)
        this.type = 'fantastic';
        this.author = author;
    }
}

class DetectiveBook extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type,author){
        super(name, releaseDate, pagesCount, state, type)
        this.type = 'detectiv';
        this.author = author;
    }
}

function digits(n) {
    // TODO
    let count = 1
    const test = [n, count]
   for(let i = 0; i <= n; i++){
     count ++
   }
  return test;
  }
  console.log(digits(12))