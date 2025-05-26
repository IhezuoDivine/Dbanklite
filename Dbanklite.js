document.addEventListener("DOMContentLoaded", function () {
  const headernav = document.getElementById("headernav");
  const menubarbtn = document.getElementById("menubar");

  menubarbtn.addEventListener("click", function (event) {
    event.preventDefault();

    headernav.classList.toggle("active");
  });

  const main = document.getElementById("main");
  const loginsection = document.getElementById("loginsection");
  const Loginbtn = document.getElementById("Loginbtn");
  const submitbtn = document.getElementById("submitbtn");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errormessage = document.getElementById("errormessage");

  Loginbtn.addEventListener("click", function (event) {
    event.preventDefault();

    main.style.display = "none";
    loginsection.style.display = "block";
  });

  function showError(element, message) {
    element.textContent = message;
    element.style.color = "red";

    setTimeout(() => {
      element.textContent = "";
    }, 2000);
  }

  function isValidEmail(email) {
    return (
      email.includes("@") && (email.endsWith(".com") || email.endsWith(".net"))
    );
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

  submitbtn.addEventListener("click", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      showError(errormessage, "Please fill all fields!");
    } else if (!isValidEmail(email)) {
      showError(errormessage, "Enter a valid email!");
    } else if (!isValidPassword(password)) {
      showError(errormessage, "Password must be at least 8 characters long!");
    } else {
      errormessage.textContent = "Login Successful";
      errormessage.style.color = "green";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    }
  });
});
