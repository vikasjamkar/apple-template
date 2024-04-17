const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion-title");
  const content = item.querySelector(".accordion-content");

  title.addEventListener("click", () => {
    for (i = 0; i < accordionItems.length; i++) {
      if (accordionItems[i] != item) {
        accordionItems[i].classList.remove("active");
      } else {
        // toggle the accordion item
        item.classList.toggle("active");
      }
    }
  });
});

var menu = document.querySelector(".icon");
var ul = document.querySelector("ul");

menu.addEventListener("click", () => {
  ul.classList.toggle("mobile-bar");
  if (ul.className == "mobile-bar") {
    document.getElementById("bar").className = "bi bi-x";
  } else {
    document.getElementById("bar").className = "bi bi-justify";
  }
});

function SignClick() {
  var Id = document.getElementById("appleId").value;
  if (Id == "") {
    alert("Please enter Apple ID");
  } else {
    alert(Id);
  }
}

// let resizeTimer;

// window.addEventListener("resize", () => {
//   clearTimeout(resizeTimer);
//   document.querySelector(".card-1").style.animation = "none";
//   resizeTimer = setTimeout(() => {
//     document.querySelector(".card-1").style.animation =
//       "slideIn2 1s ease-in-out";
//   }, 250);
// });
