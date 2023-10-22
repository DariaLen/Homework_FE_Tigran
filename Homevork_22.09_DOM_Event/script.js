let names = [
  {
    id: 1,
    name: "Steven",
    image: "https://i.ibb.co/tXqmKKR/1.png",
    salary: "5000",
  },
  {
    id: 2,
    name: "Neena",
    image: "https://i.ibb.co/yYxK3cq/2.png",
    salary: "10000",
  },
  {
    id: 3,
    name: "John",
    image: "https://i.ibb.co/SNqFDbB/3.png",
    salary: "4500",
  },
  {
    id: 4,
    name: "Rogers",
    image: "https://i.ibb.co/WnG0fVZ/4.png",
    salary: "3400",
  },
  {
    id: 5,
    name: "Cevin",
    image: "https://i.ibb.co/vdQK54J/6.png",
    salary: "500",
  },
  {
    id: 6,
    name: "Alshey",
    image: "https://i.ibb.co/wSJN6db/5.png",
    salary: "1210",
  },
  {
    id: 7,
    name: "Milki",
    image: "https://i.ibb.co/JpnDnH5/7.png",
    salary: "1210",
  },
  {
    id: 8,
    name: "Polar",
    image: "https://i.ibb.co/SnNLhgg/9.png",
    salary: "1210",
  },
  {
    id: 9,
    name: "Grindell",
    image: "https://i.ibb.co/fGH3RPW/8.png",
    salary: "1210",
  },
];
const root = document.querySelector("#root");
const cards_container = document.createElement("div");
cards_container.classList.add("cards_container");

//---------------add card
const form = document.createElement("form");
const nameInput = document.createElement("input");
const salaryInput = document.createElement("input");
const addCard = document.createElement("button");

form.classList.add("input_form");
nameInput.classList.add("nameInput");
salaryInput.classList.add("salaryInput");
addCard.classList.add("addCard");

nameInput.type = "text";
nameInput.placeholder = "Name";
nameInput.name = "Name";

salaryInput.type = "number";
salaryInput.placeholder = "Salary";
salaryInput.name = "Salary";

addCard.innerText = "Add card";
form.append(nameInput, salaryInput, addCard);
root.append(form);

let users = JSON.parse(localStorage.getItem("users")) ?? names;


function renderCards(arr) {
  arr.forEach((el) => {
    // Создаем форму
    const cardElem = document.createElement("div");
    const image = document.createElement("img");

    const cardsName = document.createElement("p");
    const cardsSalary = document.createElement("p");
    const userId = document.createElement("p");

    const dateContainer = document.createElement("div");
    const del_btn = document.createElement("button");

    del_btn.className = "del_btn";
    cardElem.className = "cardsElem";
    dateContainer.className = "dateContainer";

    image.src = el.image;
    image.alt = el.name;

    cardsName.innerText = `Name: ${el.name}`;
    cardsSalary.innerText = `Salary: ${el.salary}`;
    userId.innerText = "ID: " + Date.now();
    del_btn.innerText = "X";

    dateContainer.append(cardsName, cardsSalary, userId);

    cardElem.append(image, del_btn, dateContainer);
    cards_container.append(cardElem);
    root.append(cards_container);

    // del_btn.ondblclick = () => {
    //   deleteUser(el.id);
    // };
del_btn.addEventListener('dblclick', () => deleteUser(el.id))
  });
}

//new
function pushNewUser(obj) {
    users.push(obj);
    rerender(users);
  }

  const rerender = (array) => {
    localStorage.setItem("users", JSON.stringify(array));
    cards_container.innerHTML = "";
    renderCards(array);
  }

function deleteUser(id) {
  users = users.filter((elem) => elem.id !== id);
  rerender(users);

  //new
  if (users.length === 0) {
    localStorage.removeItem('users');
  }
}

renderCards(users);

//saveInputsData
// function saveInputsData() {
//   let inputsData = {};
//   const inputsInBlock = document.querySelectorAll("form > input");

//   inputsInBlock.forEach((item) => {
//     inputsData[item.name] = item.value;
//     names.push(inputsData);
//   });
//   localStorage.setItem("inputsData", JSON.stringify(inputsData));
//   console.log(inputsData);
//   console.log(names);
// }

// addCard.addEventListener("click", saveInputsData);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    //new
    // const { nameInput, salaryInput } = event.target;
    //---end
    let new_product = {
      id: Date.now(),
      name: nameInput.value,
      salary: salaryInput.value,
      image: "https://i.ibb.co/fGH3RPW/8.png",
    };
    // users.push(new_product);
    // renderCards(users);
  
  //new 
  pushNewUser(new_product);
  nameInput.value = '';
  salaryInput.value = '';
  })
 


