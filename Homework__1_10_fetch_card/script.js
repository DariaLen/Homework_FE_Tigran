fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  //.then((data) => console.log(data))
  .then((json) => renderCards(json.products));

const users_container = document.querySelector(".users_container");

function rating(n) {
  const roundedN = Math.round(n);
  const stars = document.createElement("div");
  
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("li");
    
    if (i <= roundedN) {
      star.className = "fa fa-star active";
    } else {
      star.className = "fa fa-star";
    }
    
    stars.appendChild(star);
  }
  
  return stars;
}





const renderCards = (array) => {
  array.forEach((elem) => {
    const cardElem = document.createElement("div");
    cardElem.classList.add("cardElem");

    const image = document.createElement("img");
 
    image.src = elem.images[0]
    image.alt = elem.title;

    const name = document.createElement("h3");
    name.textContent = `Title: ${elem.title}`;

    const price = document.createElement("p");
    price.textContent = `Price: ${elem.price}`;



    let div_icons = document.createElement('div')
    div_icons.className = 'div_icons'
    // div_icons.appendChild(rating(elem.rating))
    div_icons = rating(elem.rating)


    cardElem.append(image, name, price, div_icons);
    users_container.append(cardElem);
  });
};

