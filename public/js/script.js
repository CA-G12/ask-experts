const loginBtn = document.querySelector('#submit');
const password = document.querySelector('#password');
const username = document.querySelector('#username')
const form = document.querySelector('.register')

const postByLogin = () => {

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

  fetch('/signin', packet).then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.err) {
        console.log(data.err)

      } else {
        let url = document.URL;
        url = url.slice(0, url.lastIndexOf('/'))

        window.location.href = url
          + data.redirect;

      }
    }).catch(console.log);

}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  postByLogin();
})