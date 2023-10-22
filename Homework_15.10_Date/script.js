// Напишите функцию checkDate() которая в консоль отобразит количество дней
//  до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции

const checkDate = () => {
    let currentDate = new Date();    //2023-10-15T10:50:10.812Z
    let currentYear = currentDate.getFullYear();  //2023
    // let currentMonth = currentDate.getMonth();  //9
    let nextMonth = currentDate.getMonth() + 1; //10
    let nextMonthDate = new Date(currentYear, nextMonth, 0);   // Создаем дату для следующего месяца  = > nextMonthDate=2023-10-30T23:00:00.000Z
    let daysLeft = nextMonthDate.getDate() - currentDate.getDate();  // Вычисляем количество дней до конца месяца  ( 31-15 = 16)
    console.log("Days left until the end of the month: ", daysLeft);
}

// checkDate();

// Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

// Предусмотрите вывод 4 пункта (дня, дней)

const isItFridayToday = () => {
    let today = new Date();  //   //2023-10-15T10:50:10.812Z
    // let currentDate = new Date("2023-10-20T10:50:10.812Z"); 
    let weekDay = today.getDay()
    if(weekDay == '5'){
        return 'Сегодня пятница!'
    } else if(weekDay == '6'){
        return "Пятница была вчера!"
    } else if(weekDay == '4'){
        return 'Завтра пятница!'
    } else if(weekDay == '0'){
        return 'Пятница будет через 5 дней'
    }else if(weekDay == '1'){
        return 'Пятница будет через 4 дня'
    }else if(weekDay == '2'){
        return 'Пятница будет через 3 дня'
    }else if(weekDay == '3'){
        return 'Пятница будет через 2 дня'
    }

}
// console.log(isItFridayToday())

//2 var
function isItFridayToday2() {
    let today = new Date(); 
    //  let tomorrow = new Date(today);
    //  let yesterday = new Date(today); 
    //  tomorrow.setDate(today.getDate() + 1); 
    //  yesterday.setDate(today.getDate() - 1);
    let dayOfWeek = today.getDay();

// if (dayOfWeek === 0) { 
//     dayOfWeek = 7;
//  }

if (dayOfWeek == 5) { 
    console.log("Сегодня пятница!"); 
} else if (dayOfWeek === 4) { 
    console.log("Пятница была вчера"); 
} else if (dayOfWeek === 6) {
     console.log("Завтра пятница!"); 
    } else { var daysUntilFriday = 5 - dayOfWeek;

    console.log("Пятница будет через " + daysUntilFriday + " д" + 
    (daysUntilFriday % 10 === 1 && daysUntilFriday !== 11 ? "ень" : "ней")); 
    } 
}

// isItFridayToday2();


// Задан массив prices, передающий элементы строкового типа. 
// Напишите функцию getInfo(prices), которая получает массив и возвращает количество элементов, 
// которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в виде массива по примеру:

// Пример:
let price = [ 
'Цена товара - 1200$', 
'Стоимость - 500$', 
'Цена не определена', '9999',
'Ценовая категория - больше 300$',
'Цена за услугу 500 EUR',
 ]

// console.log(getInfo(prices))


const getInfo = (arr) => {
    let new_arr = [0,0]
    // let startPrice = 0
    // let endDollar = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].startsWith('Цена')){
            new_arr[0] ++
            // startPrice++
        }  if(arr[i].endsWith('$')){
            new_arr[1] ++
            // endDollar++
        }
    }
    // return [startPrice, endDollar]
    return new_arr
}
console.log(getInfo(price))  //// Результат: [3,3]

// Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру: 

let arrays = [ 
'89840959944 exampleonemain@mail.ru', 
'+79840959933 forreason@yandex.net', 
'somemail@mail.ru', 
'89840959900 example@gmil.ru', 
'+79840959911', 
'grandthere@mail.ru',
'jetpackfor@gmail.ru',
 '89840959922 some@yandex.com',
 ] 


// Результат: ['89840959944','+79840959933','89840959900','+79840959911','89840959922']
//  ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru',
//  'jetpackfor@gmail.ru','some@yandex.com']


const filterArrays = (array) => {
    const phones = [];
    const emails = [];
    for(let i = 0; i < array.length; i++){
        let contact = array[i].split(" ");
        if(contact.length === 2){
            phones.push(contact[0]);
            emails.push(contact[1])
        } else if(contact.length === 1){
           if(contact[0].includes('@')){
            emails.push(contact[0]);
           }else {
            phones.push(contact[0])
           }
        }
    }
    return console.log(phones,emails)
 
}

filterArrays(arrays)


// Задан массив cards, передающий элементы строкового типа. 
// Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”,
//  оставив первые 4 и последние 4 цифры.

// Пример:
	let phones = [ 
'4000 0012 0056 9499', 
'4000 0013 5456 7379', 
'4000 0014 1456 9869', 
'4000 0015 3466 7859', 
'4000 0016 3556 6899', 
'4000 0017 4456 4699'
]
	
// Результат: [
// '4000*****9499',
// '4000*****7379',
// '4000*****9869',
// '4000*****7859',
// '4000*****6899',
// '4000*****4699'
// ]

let encrPhones = phones.map(phone => {
    let firstFour = phone.slice(0, 4);
    let lastFour = phone.slice(-4);
    // let encryptedDigits = '*'.repeat(phone.length - firstFour.length - lastFour.length);
    let encryptedDigits = '*'.repeat(5);
    return firstFour + encryptedDigits + lastFour;
  });
  
  console.log(encrPhones);
