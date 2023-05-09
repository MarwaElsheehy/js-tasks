let title = document.querySelector(".title");
let turn = "X";
let squares = [];

function end() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    title.textContent = `${squares[1]} is the winner`;
    document.getElementById("item" + 1).style.backgroundColor = "black";
    document.getElementById("item" + 2).style.backgroundColor = "black";
    document.getElementById("item" + 3).style.backgroundColor = "black";

    setInterval(function () {
      title.textContent += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    title.textContent = `${squares[4]} is the winner`;
    document.getElementById("item" + 4).style.backgroundColor = "black";
    document.getElementById("item" + 5).style.backgroundColor = "black";
    document.getElementById("item" + 6).style.backgroundColor = "black";

    setInterval(function () {
      title.textContent += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    title.textContent = `${squares[7]} is the winner`;
    document.getElementById("item" + 7).style.backgroundColor = "black";
    document.getElementById("item" + 8).style.backgroundColor = "black";
    document.getElementById("item" + 9).style.backgroundColor = "black";

    setInterval(function () {
      title.textContent += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    title.textContent = `${squares[1]} is the winner`;
    document.getElementById("item" + 1).style.backgroundColor = "black";
    document.getElementById("item" + 4).style.backgroundColor = "black";
    document.getElementById("item" + 7).style.backgroundColor = "black";

    setInterval(function () {
      title.textContent += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    title.textContent = `${squares[2]} is the winner`;
    document.getElementById("item" + 2).style.backgroundColor = "black";
    document.getElementById("item" + 5).style.backgroundColor = "black";
    document.getElementById("item" + 8).style.backgroundColor = "black";

    setInterval(function () {
      title.textContent += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    title.textContent = `${squares[3]} is the winner`;
    document.getElementById("item" + 3).style.backgroundColor = "black";
    document.getElementById("item" + 6).style.backgroundColor = "black";
    document.getElementById("item" + 9).style.backgroundColor = "black";

    setInterval(function () {
      title.textContent += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    title.textContent = `${squares[1]} is the winner`;
    document.getElementById("item" + 1).style.backgroundColor = "black";
    document.getElementById("item" + 5).style.backgroundColor = "black";
    document.getElementById("item" + 9).style.backgroundColor = "black";

    setInterval(function () {
      title.textContent += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    title.textContent = `${squares[3]} is the winner`;
    document.getElementById("item" + 3).style.backgroundColor = "black";
    document.getElementById("item" + 5).style.backgroundColor = "black";
    document.getElementById("item" + 7).style.backgroundColor = "black";

    setInterval(function () {
      title.textContent += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  }
}
function play(id) {
  let ele = document.getElementById(id);
  if (turn === "X" && ele.innerHTML == "") {
    ele.textContent = turn;
    turn = "O";
    title.innerHTML = turn;
  } else if (turn === "O" && ele.innerHTML == "") {
    ele.textContent = turn;
    turn = "X";
    title.innerHTML = turn;
  }
  end();
}
