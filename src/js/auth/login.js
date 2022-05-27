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

  const { isLoginValid, isEmailValid, isPasswordValid } = loginValidation(info);

  if (isLoginValid) {
    alert('success');
  } 
  if (!isEmailValid) {
    const emailInputDiv = document.querySelector('#emailInputDiv');
    const small = document.createElement('small');
    small.classList.add("form-text", "text-danger");
    small.textContent = "Please provide valid email address";
    emailInputDiv.append(small);
  }
  if (!isPasswordValid) {
    const passwordInputDiv = document.querySelector('#passwordInputDiv');
    const small = document.createElement('small');
    small.classList.add("form-text", "text-danger");
    small.textContent = "Please provide in your password at least one number and one special character";
    passwordInputDiv.append(small);
  }

})
