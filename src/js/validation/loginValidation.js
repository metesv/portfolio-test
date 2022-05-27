import { emailValidation } from "./emailValidation";

export const loginValidation = (infoObj) => {
  const { email, password } = infoObj;

  const isEmailValid = emailValidation(email);

  const isPasswordValid = password.length > 8 ? true : false;

  return isEmailValid && isPasswordValid;
}
