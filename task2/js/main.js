let counter = document.querySelector("#counter");
let btns = document.querySelectorAll(".btn");

let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("increase")) {
      count++;
      document.querySelector("#counter").style.color = "green";
    } else if (e.target.classList.contains("decrease")) {
      count--;
      document.querySelector("#counter").style.color = "red";
    } else {
      count = 0;
    }
    counter.textContent = count;
  });
});
