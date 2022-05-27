import { emailValidation } from "./emailValidation";

export const registerValidation = (infoObj) => {
  const { email, password1, password2 } = infoObj;

  const isEmailValid = emailValidation(email);

  const isPasswordValid = password1 === password2;

  return isEmailValid && isPasswordValid;
}
