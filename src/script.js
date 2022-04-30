const SubmitBtn = document.querySelector(".early-access > div form input[type=submit]")
const EmailInput = document.querySelector(".early-access > div form input[type=email]")

SubmitBtn.addEventListener("click", ValidateEmail)
function ValidateEmail(event) {
    event.preventDefault()
  const ValidRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (EmailInput.value.match(ValidRegex)) {
    EmailInput.value = "";
    document.querySelector(".early-access > div form p.error").style.display =
    "none";
    return true;
  } else {
    EmailInput.value = "";

    document.querySelector(".early-access > div form p.error").style.display =
      "block";
    return false;
  }
}
