document.addEventListener("DOMContentLoaded", function () {
  const headernav = document.getElementById("headernav");
  const menubarbtn = document.getElementById("menubar");

  menubarbtn.addEventListener("click", function (event) {
    event.preventDefault();

    headernav.classList.toggle("active");
  });
});
