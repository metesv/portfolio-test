import { emailValidation } from "./emailValidation";
import { passwordValidation } from "./passwordValidation";

export const registerValidation = (infoObj) => {
  const { email, password1, password2 } = infoObj;

  const isPasswordOneValid = passwordValidation(password1);

  const isPasswordsMatched = password1 === password2;

  const isEmailValid = emailValidation(email);
  console.log(isEmailValid);

  const isPasswordValid = isPasswordOneValid && isPasswordsMatched;

  const isRegistirationValid = isEmailValid && isPasswordValid;

  console.log(isRegistirationValid)
  console.log(isEmailValid)
  console.log(isPasswordValid)
  console.log(isPasswordsMatched)

  return {
    isRegistirationValid,
    isEmailValid,
    isPasswordValid,
    isPasswordsMatched
  }
}
