// login
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
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

  //for login validation
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

// Signup
document.addEventListener("DOMContentLoaded", function () {
  const fullnamesignup = document.getElementById("fullname");
  const emailsignup = document.getElementById("emailsignup");
  const phonesignup = document.getElementById("phone");
  const passwordsignup = document.getElementById("passwordsignup");
  const confirmPasswordsignup = document.getElementById("confirmPassword");
  const accountType = document.getElementById("accountType");
  const submit = document.getElementById("submit");
  const errormessage2 = document.getElementById("errormessage2");

  function showError(element, message, color = "red") {
    element.textContent = message;
    element.style.color = color;

    if (color === "red") {
      setTimeout(() => {
        element.textContent = "";
      }, 2000);
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

  function isValidPhone(phone) {
    return /^\d{10,15}$/.test(phone);
  }

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    const fullname = fullnamesignup.value.trim();
    const email = emailsignup.value.trim();
    const phone = phonesignup.value.trim();
    const password = passwordsignup.value.trim();
    const confirmPassword = confirmPasswordsignup.value.trim();
    const account = accountType.value;

    if (
      !fullname ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword ||
      !account
    ) {
      showError(errormessage2, "Please fill all fields!");
    } else if (password !== confirmPassword) {
      showError(errormessage2, "Passwords do not match!");
    } else if (!isValidEmail(email)) {
      showError(errormessage2, "Enter a valid email!");
    } else if (!isValidPhone(phone)) {
      showError(errormessage2, "Enter a valid phone number (10-15 digits)!");
    } else if (!isValidPassword(password)) {
      showError(errormessage2, "Password must be at least 8 characters long!");
    } else {
      // localStorage.setItem("username", fullname);
      // On successful signup, save all details in localStorage as JSON string
      const userData = {
        fullname: fullname,
        email: email,
        phone: phone,
        account: account,
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      showError(errormessage2, "Signup Successful!", "green");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    }
  });
});

// Dashborad
document.addEventListener("DOMContentLoaded", function () {
  const name = localStorage.getItem("username");

  const message = name ? `Hello, ${name}` : "Hello, welcome to your dashboard!";

  document.getElementById("welcomeMessage").textContent = message;
});

document.addEventListener("DOMContentLoaded", () => {
  const userDataStr = localStorage.getItem("userData");
  if (!userDataStr) return; // no saved data

  const userData = JSON.parse(userDataStr);

  if (userData.fullname)
    document.getElementById("profileFullname").textContent = userData.fullname;

  if (userData.email)
    document.getElementById("profileEmail").textContent = userData.email;

  if (userData.phone)
    document.getElementById("profilePhone").textContent = userData.phone;

  if (userData.account)
    document.getElementById("profileAccount").textContent = userData.account;
});

document.addEventListener("DOMContentLoaded", () => {
  const myprofile = document.getElementById("myprofile");
  const returnhome = document.getElementById("returnhome");
  const gotomyprofile = document.getElementById("gotomyprofile");
  const mainsection = document.getElementById("mainsection");
  const outofmorebox = document.getElementById("outofmorebox");
  const morebtn = document.getElementById("morebtn");
  const morebox = document.getElementById("morebox");

  // display morebox and hide others
  morebtn.addEventListener("click", function (event) {
    event.preventDefault();

    myprofile.style.display = "none";
    mainsection.style.display = "none";
    morebox.style.display = "block";
  });

  // display profile and hide others
  gotomyprofile.addEventListener("click", function (event) {
    event.preventDefault();

    mainsection.style.display = "none";
    myprofile.style.display = "block";
    morebox.style.display = "none";
  });

  //return my profile to home
  returnhome.addEventListener("click", function (event) {
    event.preventDefault();

    mainsection.style.display = "block";
    myprofile.style.display = "none";
    morebox.style.display = "none";
  });

  outofmorebox.addEventListener("click", function (event) {
    event.preventDefault();

    mainsection.style.display = "block";
    myprofile.style.display = "none";
    morebox.style.display = "none";
  });
});
