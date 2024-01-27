const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  const authenticated = authentication(email, password);

  if (authenticated) {
    window.location.href = "welcome.html";
  } else {
    alert("wrong");
  }
});

function authentication(email, password) {
  if (email === "admin" && password === "password") {
    return true;
  } else {
    return false;
  }
}
