let game = document.querySelector(".game");
let btns = Array.from(game.children);
let result = document.querySelector(`.result`);
let player = `X`;
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  ];
  
  let checkWinner = (btn, i) => {
    for(let pattern of winPattern){
    let val1 = btns[pattern[0]].innerText;
    let val2 = btns[pattern[1]].innerText;
    let val3 = btns[pattern[2]].innerText;
    if(val1 === val2 && val2 === val3 && val1 != ""){
      if(player === `X`){
        result.innerText = `The winner is Player X`;
        result.classList.add(`winner-X`);
      } else{
        result.innerText = `The winner is Player O`;
        result.classList.add(`winner-O`);
      }
      for(let box of btns){
        box.disabled = true;
      }
      resetBtn.style.display = "none";
      startBtn.style.display = "block";
    }
    }
  }
  
game.addEventListener("click", (e) => {
  let btn = e.target;
  let i = btns.indexOf(btn);
  btn.innerText = `${player}`;
  checkWinner(btn,i);
  if (player === `X`) {
    player = `O`;
    btn.style.background = `pink`;
  } else {
    player = `X`;
    btn.style.background = `skyblue`;
  }
  btn.disabled = true;
})

let resetBtn = document.querySelector(`.resetBtn`);
let startBtn = document.querySelector(`.startBtn`);
let container = document.querySelector(`.container`);

resetBtn.addEventListener(`click`,()=>{
  player = `X`;
  result.innerText = ``;
  result.classList.remove(`winner-X`);
  result.classList.remove(`winner-O`);
  for(let box of btns){
    box.disabled = false;
    box.innerText =``;
    box.style.background = ``;
  }
})

startBtn.addEventListener(`click`,()=>{
  player = `X`;
  result.innerText = ``;
  result.classList.remove(`winner-X`);
  result.classList.remove(`winner-O`);
  for(let box of btns){
    box.disabled = false;
    box.innerText =``;
    box.style.background = ``;
  }
  container.style.display = "flex";
  resetBtn.style.display = "block";
  startBtn.style.display = "none";
})