let btn = document.querySelectorAll(".btn");
let msg = document.querySelector("#msg");
let reset = document.querySelector(".reset");
let contain = document.querySelector(".msg-container");
let start = document.querySelector(".new")
let truno = true;

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (truno) {
      box.innerText = "O";
      truno = false;
    } else {
      box.innerText = "X";
      truno = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showwinner(pos1);
        disableAllButtons();
        return;
      }
    }
  }
}

const showwinner = (win) => {
  msg.innerText = `Winner is ${win}`;
  contain.classList.remove("hide");
}

const disableAllButtons = () => {
  btn.forEach((box) => {
    box.disabled = true;
  });
};

reset.addEventListener("click", () => {
  btn.forEach((box) => {
    box.disabled = false;
    box.innerText = ""; 
  });
  truno = true;
  contain.classList.add("hide");
});
start.addEventListener("click",() => {
      btn.forEach((box) => {
        box.disabled = false;
        box.innerText = ""; 
      });
      truno = true;
      contain.classList.add("hide");
    }); 