import { loginValidation } from "../validation/loginValidation";
import "/src/main.scss";

const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;

  const info = {
    email,
    password
  }

  if(loginValidation(info)) {
    console.log(true)
  } else {
    console.log(false)
  }

})
