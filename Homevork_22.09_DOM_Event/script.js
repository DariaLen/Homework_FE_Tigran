let names = [
    {id: 1, name: 'Steven', image: 'https://i.ibb.co/tXqmKKR/1.png', salary: '5000'},
    {id: 2, name: 'Neena', image: 'https://i.ibb.co/yYxK3cq/2.png', salary: '10000'},
    {id: 3, name: 'John', image: 'https://i.ibb.co/SNqFDbB/3.png', salary: '4500'},
    {id: 4, name: 'Rogers', image: 'https://i.ibb.co/WnG0fVZ/4.png', salary: '3400'},
    {id: 5, name: 'Cevin', image: 'https://i.ibb.co/vdQK54J/6.png', salary: '500'},
    {id: 6, name: 'Alshey', image: 'https://i.ibb.co/wSJN6db/5.png', salary: '1210'},
    {id: 7, name: 'Milki', image: 'https://i.ibb.co/JpnDnH5/7.png', salary: '1210'},
    {id: 8, name: 'Polar', image: 'https://i.ibb.co/SnNLhgg/9.png', salary: '1210'},
    {id: 9, name: 'Grindell', image: 'https://i.ibb.co/fGH3RPW/8.png', salary: '1210'},
]

const root = document.querySelector('#root')

const cards_container = document.createElement('div');
cards_container.classList.add('cards_container');


//---------------add card 
const form = document.createElement('form');
const nameInput = document.createElement('input');
const salaryInput = document.createElement('input');
const addCard = document.createElement('button');


form.classList.add('input_form')
nameInput.classList.add('nameInput')
salaryInput.classList.add('salaryInput')
addCard.classList.add('addCard')


nameInput.type = 'text';
nameInput.placeholder = 'Name';
nameInput.name = 'Name';

salaryInput.type = 'number';
salaryInput.placeholder = 'Salary';
salaryInput.name = 'Salary';

addCard.innerText = 'Add card';
form.append(nameInput,salaryInput,addCard )
root.append(form)


addCard.addEventListener('click', (event) => {
    event.preventDefault();
    const new_product = {
        id: Date.now(),
        name: nameInput.value,
        salary: salaryInput.value,
        image:'https://i.ibb.co/fGH3RPW/8.png'
      }
    
      names.push(new_product);
      renderCards(names)


})



//-------------------------------------------------------------
const renderCards = (arr) => {
    arr.forEach(el => {
// Создаем форму 
const cardElem = document.createElement('div');
const image = document.createElement('img')

const cardsName = document.createElement('p')
const cardsSalary = document.createElement('p')
const userId = document.createElement('p')

const dateContainer = document.createElement('div')
const del_btn = document.createElement('button')

del_btn.className = 'del_btn'
cardElem.className = 'cardsElem'
dateContainer.className = 'dateContainer'

image.src = el.image;
image.alt = el.name;

cardsName.innerText = `Name: ${el.name}`
cardsSalary.innerText = `Salary: ${el.salary}`
userId.innerText = 'ID: ' + Date.now()
del_btn.innerText = 'X'

dateContainer.append(cardsName,cardsSalary,userId,)

// cardElem.append(image,cardsName,cardsSalary,userId,del_btn)
cardElem.append(image,del_btn,dateContainer)
cards_container.append(cardElem)
root.append(cards_container )


del_btn.addEventListener("dblclick", (event) => {
    event.stopPropagation()
    cardElem.remove()
})

//2var
// cardElem.addEventListener('dblclick', (event) => {
//     event.stopPropagation()
//     cardElem.remove()
// })



//localStorage---------------------
localStorage.setItem('user', JSON.stringify(names))
// let json = localStorage.getItem('user')
// let arr = JSON.parse(json)
// arr[1] = 'user!!!'


// localStorage.setItem('user', JSON.stringify(names))
// console.log(localStorage.getItem('user'));



// addCard.addEventListener('click', (event) => {
//     const sozializObject = localStorage.getItem()
// })

// Получаем элемент <input>
const input = document.querySelector('input');
// Получаем значение из localStorage (если оно существует)
const savedData = localStorage.getItem('data');
// Если есть сохраненные данные, устанавливаем их в поле <input>
if (savedData) {
  input.value = savedData;
}
// Слушаем событие ввода и сохраняем данные в localStorage
input.addEventListener('input', function(e) {
  localStorage.setItem('data', e.target.value);
});
//--------
// del_btn.addEventListener('click', () => {
//     let data = localStorage.getItem('myArray') 
//     if(data) {
//         let array = JSON.parse(data)
//         console.log('Массив из localStorage:', array)
//         localStorage.setItem("myArray", JSON.stringify(array))
//     } else {
//         console.log('Нет сохраненных данных в localStorage');
//     }
// })

 
});
};

// // Удаление содержимого container, вызов функции render с новым массивом
// function rerender(array){
//     localStorage.setItem('names', JSON.stringify(array))
//     div_container.innerHTML = ''
//     renderCards(array)
// }

// // Удаление элемента, создание нового массива без удаляемого элемента 
// function deleteUserById(id){
//     users = names.filter(elem => elem.id !== id)
//     rerender(users)
// }

renderCards(names)


//save inputs data
function saveInputsData()  {
    let inputsData = {}
    const inputsInBlock = document.querySelectorAll('form > input')

    inputsInBlock.forEach( item => {
        inputsData[item.name] = item.value;
        names.push(inputsData)
    });
     localStorage.setItem("inputsData", JSON.stringify(inputsData))
     console.log(inputsData);
     console.log(names)
    }

addCard.addEventListener('click', saveInputsData )

