const button = document.getElementById("button-form");
const form = document.getElementById("form");

const inputName = document.getElementById("exampleInputName1");
const inputEmail = document.getElementById("exampleInputEmail1");
const inputMessage = document.getElementById("floatingTextarea");

const inputNameText = document.getElementById("inputName");
const inputEmailText = document.getElementById("inputEmail");
const inputMessageText = document.getElementById("inputText");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputName.value == "") {
    inputNameText.innerHTML = '* Ingresar campo obligatorio'
  }
  if (inputEmail.value == "") {
    inputEmailText.innerHTML = '* Ingresar campo obligatorio'
  }
  if (inputMessage.value == "") {
    inputMessageText.innerHTML = '* Ingresar campo obligatorio'
  }
});