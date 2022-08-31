const loginBtn = document.querySelector('#submit');
const password = document.querySelector('#password');
const username = document.querySelector('#username')
const form = document.querySelector('.register')

const postByLogin =()=>{

const packet = {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  console.log(username, password);

  fetch('/loginss', packet).then((res) => res.json())
  .then((data) => {
    console.log(data);
  }).catch(console.log);

}
form.addEventListener('submit',(e)=>{
     e.preventDefault();
   postByLogin();
})