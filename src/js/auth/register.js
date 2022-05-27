import { registerValidation } from "../validation/registerValidation";
import "/src/main.scss";

const registerForm = document.querySelector('#registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = e.target[0].value;
  const password1 = e.target[1].value;
  const password2 = e.target[2].value;

  const info = {
    email,
    password1,
    password2
  }

  if(registerValidation(info)) {
    console.log(true)
  } else {
    console.log(false)
  }
})
