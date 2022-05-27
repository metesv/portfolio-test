import { registerValidation } from "../validation/registerValidation";
import "/src/main.scss";

const registerForm = document.querySelector('#registerForm');
const registerBtn = document.querySelector('#registerBtn');

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

  const { isRegistirationValid, isEmailValid, isPasswordValid, isPasswordsMatched } = registerValidation(info);

  if (isRegistirationValid) {
    alert('succesfully registered');
  }

  if (!isEmailValid) {
    const emailInputDiv = document.querySelector('#emailInputDiv');
    const small = document.createElement('small');
    small.classList.add("form-text", "text-danger");
    small.textContent = "Please provide valid email address";
    emailInputDiv.append(small);
    registerBtn.disabled = true;
    setTimeout(() => {
      small.remove();
      registerBtn.disabled = false;
    }, 5000)
  }

  if (!isPasswordValid) {
    const passwordInputDiv = document.querySelector('#passwordInputDiv1');
    const small = document.createElement('small');
    small.classList.add("form-text", "text-danger");
    small.textContent = "Please provide in your password at least one number and one special character";
    passwordInputDiv.append(small);
    registerBtn.disabled = true;
    setTimeout(() => {
      small.remove();
      registerBtn.disabled = false;
    }, 5000)
  }

  if (!isPasswordsMatched) {
    const passwordInputDiv = document.querySelector('#passwordInputDiv2');
    const small = document.createElement('small');
    small.classList.add("form-text", "text-danger");
    small.textContent = "Please check your passwords";
    passwordInputDiv.append(small);
    registerBtn.disabled = true;
    setTimeout(() => {
      small.remove();
      registerBtn.disabled = false;
    }, 5000)
  }
})
