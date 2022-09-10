"use strict";

const path = document.querySelectorAll("path");

for (let i = 0; i < path.length; i++) {
  path[i].addEventListener("click", function () {
    path.forEach((region) => region.classList.toggle("hidden"));
    path[i].classList.remove("hidden");
    path[i].style.fill = "rgb(204, 61, 61)";
  });
}
