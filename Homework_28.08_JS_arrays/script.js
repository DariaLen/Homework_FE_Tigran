//1.Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция,
//которая подсчитывает количество овец,присутствующих в массиве (true означает присутствие).

const arraylist = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheep(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count++;
    }
  }

  return count;
}
console.log("количество овец,присутствующих в массиве", countSheep(arraylist));

//2. Сделайте функцию, возвращающую значение, умноженное на 50 и увеличенное на 6.
//  Если введенное значение является строкой, оно должно вернуть «Error».

function multipli(param) {
  if (typeof param === "number") {
    return param * 50 + 6;
  } else if (typeof param === "string") {
    return "error";
  }
}

console.log(multipli(14));

//3. Создайте функцию с именем shortcut для удаления строчных гласных (a), e),(i), o), u ) в данной строке

function shortcut(string) {
  if (string !== string.toUpperCase()) {
    return string.replace(/['e' 'a' 'o' 'i' 'u']/g, "");
  } else {
    return string;
  }
}
console.log(shortcut("mama"));

function shortcut2(string) {
  return string !== string.toUpperCase()
    ? string.replace(/['e' 'a' 'o' 'i' 'u']/g, "")
    : string;
}

console.log(shortcut2("hello"));

//4. Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост2).

// если ИМТ <= 18,5, возвращаем «Недостаточный вес»
// если ИМТ <= 25,0 возвращает "Нормальный"
// если ИМТ <= 30,0, верните «Избыточный вес»
// если ИМТ > 30 вернуть «Ожирение»

function calcuBodyMassIndex(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return "Недостаточный вес";
  } else if (bmi <= 25.0) {
    return "Нормальный";
  } else if (bmi <= 30) {
    return "Избыточный вес ";
  } else {
    return "Ожирение";
  }
}

console.log(calcuBodyMassIndex(50, 1.71));

//5.This code does not execute properly. Try to figure out why.

//6.Complete the method that takes a boolean value and return a "Yes" string for true,
// or a "No" string for false.
function boolYesNo(bool) {
  return bool ? "Yes" : "No";
}

console.log(boolYesNo(true)); // Output: "Yes"
console.log(boolYesNo(false)); // Output: "No"

//.7 Напишите программу, которая находит суммирование каждого числа от 1 до числа.
//Число всегда будет положительным целым числом больше 0.
//2 -> 3 (1 + 2)
function summation(num) {
  let multiply = 0;
  for (let i = 1; i <= num; i++) {
    multiply += i;
  }
  return multiply;
}
console.log(summation(8));

//8. Я новичок в программировании, и теперь я хочу получить сумму двух массивов...
//Собственно сумма всех их элементов. Буду признателен за вашу помощь.
//P.S. Каждый массив включает в себя только целые числа. На выходе тоже число.

const array1 = [1, 4, 6, 7]; //18
const array2 = [34, 1, 5, 3]; //42

//1.1
function sumOfTwoArrays(arr1, arr2) {
  let sum = 0;
  arr1.forEach((el) => (sum += el));
  arr2.forEach((el) => (sum += el));
  return sum;
}
console.log("сумма двух массивов (1var) = ", sumOfTwoArrays(array1, array2));

//1.2
function sumOfTwoArrays(arr1, arr2) {
  let sum = 0;
  arr1.map((el) => (sum += el));
  arr2.map((el) => (sum += el));
  return sum;
}
console.log("сумма двух массивов (2var) = ", sumOfTwoArrays(array1, array2));

//9.Нам нужно написать функцию, которая берет эту коллекцию и возвращает количество очков, набранных нашей командой ()
//Если x > y: 3 очка (победа)
//Если x < y: 0 очков (проигрыш)
//если x = y: 1 очко (ничья)
const championship = [
  "3:1",
  "2:2",
  "0:1",
  "1:3",
  "3:2",
  "1:1",
  "0:2",
  "1:0",
  "3:0",
  "1:2",
];

function calculatePoints(resultOfMatch) {
  let points = 0;
  resultOfMatch.map((el) => {
    const [x, y] = el.split(":");
    if (x > y) {
      points += 3; // победа
    } else if (x == y) {
      points += 1; // ничья
    }
  });
  return points;
}

console.log(
  "количество очков, набранных нашей командой ",
  calculatePoints(championship)
);

//.10 Натан любит кататься на велосипеде.
//Поскольку Натан знает, что важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.
//Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
function numberOfLitres(hourTime) {
  let sum = hourTime * 0.5;
  return Math.floor(sum);
  // return Math.floor(hourTime * 0.5)
}
console.log(numberOfLitres(6.7));
