const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const input = document.getElementsByClassName("input")[0]
const errorMessage = document.getElementsByClassName("error_message")[0]
const button = document.getElementsByClassName("form__button")[0]


function validateEmailAddress() {
  if (input.value.match(regex)) {
    input.classList.remove("input--error")
    errorMessage.classList.add("error_message--hidden")  
  } else {
    input.classList.add("input--error")
    errorMessage.classList.remove("error_message--hidden")
  }
}

input.addEventListener('focusout', validateEmailAddress)
button.addEventListener('click', () => {
  if (input.value.match(regex)) {
    window.alert("We will be in touch soon!")
  } else {
    validateEmailAddress()
  }
})
