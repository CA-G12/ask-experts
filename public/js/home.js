const postsContanier = document.querySelector('.questions-container');

fetch('/questions').then((data) => data.text()).then((res) => {
  JSON.parse(res).forEach((element) => {
    console.log(element)
   const { username, date,category } = element;

    const post = document.createElement('div');
    post.className = 'post';

    const userName = document.createElement('div');
    userName.className = 'user-name';
    userName.textContent = username;
    
    const Category = document.createElement('div');
    Category.className = 'user-name';
    Category.textContent = category;
    

    const postText = document.createElement('div');
    postText.className = 'post-text';
    postText.textContent = category;

    const postTime = document.createElement('div');
    postTime.className = 'post-time';
    postTime.textContent = date;
    const upperContainer=document.createElement('div');
    upperContainer.setAttribute('style','display:flex;justify-content: space-between;');
    upperContainer.appendChild(userName);
    upperContainer.appendChild(Category);
   
    post.appendChild(upperContainer);
    post.appendChild(postText);
    post.appendChild(postTime);
    
    postsContanier.appendChild(post);
  });
}).catch((err) => { console.log('error', err); });