import { isEmpty, isEmail } from "validator";

const SHOW_ERROR_MESSAGE = "show-error-message";

const form = document.querySelector(".form") as HTMLFormElement;
const userName = document.querySelector(".username") as HTMLInputElement;
const emailUser = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

function showErrorMessage(input: HTMLElement, message: string): void {
  const formFields = input.parentElement as HTMLElement;
  const errorMessage = formFields.querySelector(
    ".error-message",
  ) as HTMLElement;

  errorMessage.innerText = message;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function hideErroMessage(form:HTMLFormElement) {
  form.querySelectorAll("." + SHOW_ERROR_MESSAGE).forEach((messageErro) => {
    messageErro.classList.remove(SHOW_ERROR_MESSAGE);
  });
}

function checkEmptyFields(...inputs: HTMLInputElement[]) {

  inputs.forEach((field) => {
    if (isEmpty(field.value)) {
      showErrorMessage(field, "O campo não pode estar vazio");
    }
  })
}

function checkEmail(input: HTMLInputElement) {

  if (!isEmail(input.value)) {
    showErrorMessage(input, "O campo deve ser um email válido");
  }
}

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement) {

  if (password.value !== password2.value){
    showErrorMessage(password,"Os campos de password devem ser iguais");
    showErrorMessage(password2,"Os campos de password devem ser iguais");
  }
}

function shouldSendForm(form:HTMLFormElement): boolean{
  let hasMessageError = false;

  if(form.querySelectorAll("." + SHOW_ERROR_MESSAGE).length > 0){
    hasMessageError = true;
  }

  return !hasMessageError;
}

form.addEventListener("submit", function (e: Event): void {
  e.preventDefault();
  hideErroMessage(this);
  checkEmptyFields(userName,userName,password,password2);
  checkEmail(emailUser);
  checkEqualPasswords(password,password2);

  if (shouldSendForm(this)) console.log("formulario enviado");
});
