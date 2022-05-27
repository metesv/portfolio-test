import { emailValidation } from "./emailValidation";
import { passwordValidation } from "./passwordValidation";

export const loginValidation = (infoObj) => {
  const { email, password } = infoObj;

  const isEmailValid = emailValidation(email);

  const isPasswordValid = passwordValidation(password);

  const isLoginValid = isEmailValid && isPasswordValid;

  return {
    isLoginValid,
    isEmailValid,
    isPasswordValid
  }
}
