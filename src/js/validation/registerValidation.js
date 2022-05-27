import { emailValidation } from "./emailValidation";
import { passwordValidation } from "./passwordValidation";

export const registerValidation = (infoObj) => {
  const { email, password1, password2 } = infoObj;

  const isEmailValid = emailValidation(email);

  const isPasswordValid = passwordValidation(password1) && (password1 === password2);

  return isEmailValid && isPasswordValid;
}
