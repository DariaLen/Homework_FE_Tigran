// 1.Напишите функцию getTodos(username), которая в качестве аргумента 
// принимает никнейм пользователя (/users) и выводит список его задач (/todos).
// В качестве ответа в консоль выведите массив с задачами указанного пользователя



async function getTodos(username){
    let urlUsers = `https://jsonplaceholder.typicode.com/users?=${username}`
    let resUsers = await fetch(urlUsers)
    let dataUser = await resUsers.json()

   
    let urlTodos = `https://jsonplaceholder.typicode.com/todos?userId=${dataUser[0].id}`    //tk dataUser is array
    let resTodoss = await fetch(urlTodos)
    let dataTodos = await resTodoss.json()
    
  
    // let result = dataTodos.filter(elem => elem.userId === user.id)
    // console.log(dataTodos);
}
getTodos('Bret')

// 2.Напишите функцию getСomments(title), которая в качестве аргумента принимает заголовок
//  поста (/posts) и выводит список всех его комментариев (/comments).
// В качестве ответа в консоль выведите массив с комментариями. 
// Если у заданного поста комментариев нет, выведите в консоль соответствующее сообщение.


async function getСomments(title){

    const responsePosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await responsePosts.json();

    const post = posts.find((post) => post.title === title);
    
    if (post) { 
        const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?userId=${posts[0].id}`);
        const comments = await responseComments.json();

        // Находим все комментарии, связанные с заданным постом 
        const postComments = comments.filter((comment) => comment.postId === post.id);
        
        // Проверяем, есть ли комментарии у заданного поста 
        if (postComments.length > 0) {
            console.log(postComments.map(elem => elem.body)); 
            //  console.log(postComments[0].body); 
            } else { 
                console.log("No comments for this post"); 
            } 
        }
            } 
          
      getСomments('ratione ex tenetur perferendis')


// Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает
//  никнейм пользователя (/users) и выводит все его фотографии (/photos). В качестве ответа выведите
//   в консоль массив со всеми фотографиями указанного пользователя.
async function getPhotoByNickName(username) {
    let urlUsers = `https://jsonplaceholder.typicode.com/users?username=${username}`;
    let resUsers = await fetch(urlUsers);
    let dataUsers = await resUsers.json();

    
  if (dataUsers.length === 0) {
    console.log("Пользователь не найден");
    return;
  }
    const photos = dataUsers.find((data) => data.username === username);
   
    if(photos){
    let urlTodos = `https://jsonplaceholder.typicode.com/photos?userId=${dataUsers[0].id}`    
    let resPhohtos = await fetch(urlTodos)
    let dataTodos = await resPhohtos.json()
    
    const postImages = dataTodos.filter((comment) => comment.postId === photos.id);
    console.log(postImages);
    }
}
getPhotoByNickName("Antonette")
