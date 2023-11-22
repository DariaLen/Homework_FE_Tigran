/*slider-1  header */
const sessions_info = [
  {
    id: 1,
    title: 'Бухгалтерские услуги в вашем городе',
    presentation: 'Наша презентация 1'
  },
  {
    id: 2,
    title: 'Налоговые консультации  ',
    presentation: 'Наша презентация 2'
  },
  {
    id: 3,
    title: 'Cопровождение сделок  ',
    presentation: 'Наша презентация 3'
  },
  {
    id: 4,
    title: 'Регистрация фирмы ',
    presentation: 'Наша презентация 4'
  }
]
const card_width_slide = 589;
// const frame = document.querySelector('.frame')

let offset = 0  //-> left
let autoScrollInterval;

const sliderline = document.querySelector('.slider-line')  //wrapper
const btnLeft = document.querySelector('.slider-left')
const btnRight = document.querySelector('.slider-right')
const slider_btns = document.querySelector('.slider_btns')
const round_btns = [];

//scroll

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    offset += card_width_slide;
    if (offset > 1767) {
      offset = 0;
    }
    sliderline.style.left = -offset + 'px';
    updateActiveRoundBtn();
  }, 3000); // Интервал в миллисекундах
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

function updateActiveRoundBtn() {
  const currentRoundBtnIndex = Math.abs(offset / card_width_slide);
  round_btns.forEach((btn, index) => {
    btn.classList.toggle('activ', index === currentRoundBtnIndex);
  });
}


//-----

btnLeft.addEventListener('click', function(){
  offset -= card_width_slide ;
  if(offset < 0){
    offset = 1767
  }
  sliderline.style.left = - offset + 'px'

  updateActiveRoundBtn();
})


btnRight.addEventListener('click', function(){
  offset += card_width_slide ;
  if(offset > 1767){
    offset = 0
  }
  sliderline.style.left = - offset + 'px'

  updateActiveRoundBtn();

})

// Реализация кружочков


for (let i = 0; i < sessions_info.length; i++){
    const round_btn = document.createElement('div')
    round_btn.classList.add('round_btn')
    slider_btns.append(round_btn)
    round_btns.push(round_btn);

    round_btn.onclick = () => {
      offset_index = i
      sliderline.style.left = `${-1 * offset_index  * 589}px`;

        // Удаление класса 'activ' у всех кружков
        round_btns.forEach(btn => btn.classList.remove('activ'));
            
        // Добавление класса 'activ' к текущему кружку
          round_btn.classList.toggle('activ')


          // updateActiveRoundBtn();
    }

}


sliderline.addEventListener('mouseenter', startAutoScroll);
sliderline.addEventListener('mouseleave', stopAutoScroll);
/////-------


for(elem of sessions_info){
  const sessionWrapper = document.createElement('div')
  sessionWrapper.classList.add('session_wrapper')

  let card_item = document.createElement('h1')
  card_item.classList.add('card_item')
  card_item.innerText = elem.title;

  const btn_item = document.createElement('button')
  btn_item.classList.add('btn_item')
  btn_item.innerText = elem.presentation;

  sessionWrapper.append(card_item,btn_item)
  sliderline.append(sessionWrapper)
}


const services_img = document.querySelector('.services__img')


// const service_img_arr = ['./images/services_img.png','./images/services_img.png','./images/services_img.png', './images/services_img.png', './images/services_img.png', './images/services_img.png']


const service_img_arr = [
  {
    id:1,
    description: 'Бухгалтерское обслуживание',
    img: './images/services_img.png'
  },
  {
    id:2,
    description: 'Бухгалтерское обслуживание',
    img: './images/services_img.png'
  },
  {
    id:3,
    description: 'Бухгалтерское обслуживание',
    img: './images/services_img.png'
  },
  {
    id:4,
    description: 'Бухгалтерское обслуживание',
    img: './images/services_img.png'
  },
  {
    id:5,
    description: 'Бухгалтерское обслуживание',
    img: './images/services_img.png'
  },
  {
    id:6,
    description: 'Бухгалтерское обслуживание',
    img: './images/services_img.png'
  }
]
const render_img = (arr) => {
  arr.forEach(element => {
      const wrapper_img = document.createElement('div')
      const par = document.createElement('p')
      wrapper_img.classList.add('wrapper_img')
      
  
      // const img = document.createElement('img')
      // img.src = element.img
      // img.alt = element.description
  
      wrapper_img.style.backgroundImage = `url(${element.img})`;
     
      par.innerText = element.description;

      // wrapper_img.append(img,par);

      wrapper_img.append(par);
      services_img.append(wrapper_img);
  });
}
render_img(service_img_arr);



//Наши клиенты

const frame = document.querySelector('.frame');

let slider_index = 0;
let card_width = 255;

const cards_container_clients = document.createElement('div');
cards_container_clients.classList.add('cards_container_clients')


const imagesClients = [
{
  id:1,
  name:'our_clients1',
  img:'./images/clients_icon2.1.png',
},
{
  id:2,
  name:'our_clients2',
  img:'./images/clients_icon2.1.png',
},
{
  id:3,
  name:'our_clients3',
  img:'./images/clients_icon2.1.png',
},
{
  id:4,
  name:'our_clients4',
  img:'./images/clients_icon2.1.png',
},
{
  id:5,
  name:'our_clients5',
  img:'./images/clients_icon2.1.png',
},
{
  id:6,
  name:'our_clients6',
  img:'./images/clients_icon2.1.png',
},
{
  id:7,
  name:'our_clients7',
  img:'./images/clients_icon2.1.png',
},
{
  id:8,
  name:'our_clients8',
  img:'./images/clients_icon2.1.png',
},
{
  id:9,
  name:'our_clients9',
  img:'./images/clients_icon2.1.png',
},
{
  id:10,
  name:'our_clients10',
  img:'./images/clients_icon2.1.png',
},
{
  id:11,
  name:'our_clients11',
  img:'./images/clients_icon2.1.png',
},
{
  id:12,
  name:'our_clients12',
  img:'./images/clients_icon2.1.png',
},
{
  id:13,
  name:'our_clients13',
  img:'./images/clients_icon2.1.png',
},
{
  id:14,
  name:'our_clients14',
  img:'./images/clients_icon2.1.png',
},
{
  id:15,
  name:'our_clients15',
  img:'./images/clients_icon2.1.png',
},
{
  id:16,
  name:'our_clients16',
  img:'./images/clients_icon2.1.png',
}
]
// for(let elem of imagesClients) {
//   let card_item = document.createElement('div')
//   card_item.classList.add('card_item_clients')
//   // card_item.style.backgroundImage = `url(${elem})`
//   const cardImg = document.createElement('img')
//   cardImg.src = elem
//   card_item.append(cardImg)
//   cards_container.append(card_item)
// }

// frame.prepend(cards_container)


for(let elem of imagesClients) {

  // card_item.style.backgroundImage = `url(${elem})`
  const cardImg = document.createElement('img')
  cardImg.src = elem.img
  cardImg.alt = elem.name

  cards_container_clients.append(cardImg)
}

frame.prepend(cards_container_clients )

// buttons 

//---func round btns
function   updateRoundBtn(){
  const currentRoundBtnIndex = Math.abs(slideset / 1140);
  arr_btns.forEach((btn, index) => {
    btn.classList.toggle('activ', index === currentRoundBtnIndex);
  });
}
//--

let slideset = 0  //-> left

const slider_btn_left = document.querySelector('.btn-left')

slider_btn_left.addEventListener('click', function(){
  slideset -= 1140;
  if(slideset < 0){
    slideset = 3420
  }
  cards_container_clients.style.left = - slideset + 'px'
  updateRoundBtn();
})

const slider_btn_right = document.querySelector('.btn-right')

slider_btn_right.addEventListener('click', function(){
  slideset += 1140;
  if(slideset > 3420){
    slideset = 0
  }
cards_container_clients.style.left = -slideset + 'px'

updateRoundBtn();
})


//Реализация кружочков

const clientsSliderBtns = document.querySelector('.clients_slider_btns')
const arr_btns = [];

for(let i = 0; i < imagesClients.length / 4; i++ ){
  const round_btn_clients = document.createElement('div')
  round_btn_clients.classList.add('round_btn_clients')
  clientsSliderBtns.append(round_btn_clients)
  arr_btns.push(round_btn_clients);

  round_btn_clients.onclick = () => {
    slideset = i
    cards_container_clients.style.left = `${-1 * slideset  * 1140}px`;

    // Удаление класса 'activ' у всех кружков
    arr_btns.forEach(btn => btn.classList.remove('activ'));

      // Добавление класса 'activ' к текущему кружку
      round_btn_clients.classList.add('activ')
  }
}


//footer input values
const footer__button = document.querySelector('.footer__button')

function submitForm() {
  const firstName = document.querySelector('#firstName');
  const lastName = document.querySelector('#lastName');
  const message = document.querySelector('#message');

      let formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    message: message.value 
  }
  console.log(formData);
}
footer__button.addEventListener('click',() =>{

submitForm()
})

//feedback 

const frame_feedback = document.querySelector('.feedback');

let slide = 0;
let width = 1110;

const cards_container_feedback = document.createElement('div');
cards_container_feedback.classList.add('cards_container_feedback')

const feedback_clients = [
  {
    id:1,
    description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    firstname:'Екатерина' ,
    lastname: 'Иванова',
    company: 'Директор ООО “Раз-два"',
    img: './images/Profile_photo_feedbacks.png'
  },
  {
    id:2,
    description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    firstname:'Анна' ,
    lastname: 'Петрова',
    company: 'Директор ООО «Инвест-групп»',
    img: './images/Profile_photo_feedbacks.png'
  },
  {
    id:3,
    description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    firstname:'Клавдия' ,
    lastname: 'Кока',
    company: 'Директор ОАО «Лунный дом»',
    img: './images/Profile_photo_feedbacks.png'
  },
  {
    id:4,
    description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    firstname:'Евлампия' ,
    lastname: 'Романова',
    company: 'ИП «Безработный айтишник»',
    img: './images/Profile_photo_feedbacks.png'
  }
]

for(let elem of feedback_clients){
const cardDiv = document.createElement('div')
cardDiv.classList.add('cardDiv')

const feedback_text_wrap = document.createElement('div')
feedback_text_wrap.classList.add('feedback_text_wrap')
const feedback_text_par = document.createElement('p')
feedback_text_par.innerText = elem.description;
feedback_text_wrap.append(feedback_text_par)


const user_propertiesWrapper = document.createElement('div')
user_propertiesWrapper.classList.add('user_propertiesWrapper')

const userImage = document.createElement('img')
userImage.src = elem.img;
userImage.alt = elem.company;

const userPropsWrap = document.createElement('div')
userPropsWrap.classList.add('userPropsWrap')

const userNamePar = document.createElement('p')
userNamePar.innerText = `${elem.firstname} ${elem.lastname}`;

const userCompany = document.createElement('p')
userCompany.innerText = elem.company;

userPropsWrap.append(userNamePar,userCompany)

user_propertiesWrapper.append(userImage,userPropsWrap)

cardDiv.append(feedback_text_wrap, user_propertiesWrapper);

cards_container_feedback.append(cardDiv)

}
frame_feedback.append(cards_container_feedback)

// feedback 
function updateRoundFeedback(){
  const currentRoundBtnIndex = Math.abs(offSets / 1110);
  arrFeedback.forEach((btn, index) => {
    btn.classList.toggle('activ', index === currentRoundBtnIndex)
  })
}

let offSets = 0;
const sliderLine = document.querySelector('.cards_container_feedback')

const feedback__btnLeft = document.querySelector('.feedback__btn-left')
feedback__btnLeft.addEventListener('click', function(){
  offSets -= 1110;
  if(offSets < 0){
    offSets = 3330;

  }

  sliderLine.style.left = - offSets + 'px'
  updateRoundFeedback()
})

const feedback__btnRight = document.querySelector('.feedback__btn-right')
feedback__btnRight.addEventListener('click', function(){
  offSets += 1110;
  if(offSets > 3330){
    offSets = 0;
  }
  sliderLine.style.left = - offSets + 'px'
  updateRoundFeedback()
})


//Реализация кружочков feedback
const roundFeedback = document.querySelector('.round_feedback')
const arrFeedback = [];

for(let i = 0; i < feedback_clients.length; i++){
  const round_btn_feedback = document.createElement('div');
  round_btn_feedback.classList.add('round_btn_feedback');

  roundFeedback.append(round_btn_feedback);
  arrFeedback.push(round_btn_feedback);

  round_btn_feedback.onclick = () => {
    slide = i
    sliderLine.style.left = `${-1 * slide  * 1110}px`;

    // Удаление класса 'activ' у всех кружков
    arrFeedback.forEach(btn => btn.classList.remove('activ'));


      // Добавление класса 'activ' к текущему кружку
      round_btn_feedback.classList.add('activ')
  }
}



//burger menu
const burgerMenu = document.querySelector('.burger_menu')
const navMenu = document.querySelector('.nav-menu ul')

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('nav_menu_activ')

})