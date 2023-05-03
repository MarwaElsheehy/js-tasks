let counter = document.querySelector("#counter");
let btns = document.querySelectorAll(".btn");

let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("increase")) {
      count++;
    } else if (e.target.classList.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    counter.textContent = count;
  });
});
