const confirmInput = document.getElementById("password-confirm");
const passwordInput = document.getElementById("password");

confirmInput.addEventListener('input', checkSamePassword)
passwordInput.addEventListener('input', checkSamePassword)
function checkSamePassword() {
  if (passwordInput.value == confirmInput.value) {
    confirmInput.setCustomValidity("")
  } else {
    confirmInput.setCustomValidity("The password does not match");
  }
}