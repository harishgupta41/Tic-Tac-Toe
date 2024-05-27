let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let main=document.querySelector("#main");

// console.log(boxes)
let count=0;
let turnO = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};

const resetGame=()=>{
  turnO=true;
  count=0;
  enableBoxes();
  main.style.opacity="1";
  main.style.display="flex";
  msgcontainer.style.display="none";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
    // console.log("button was clicked");
  });
});

const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};

const showWinner=(winner)=>{
  if (count===9){
    msg.innerText="Game DRAW!";
  }
  else{
    msg.innerText=`Congratulatins, Winner is ${winner}`;
  }
  msgcontainer.style.display="flex";
  // msgcontainer.style.opacity="1";
  main.style.opacity="0";
  main.style.display="none";
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let val1=boxes[pattern[0]].innerText;
    let val2=boxes[pattern[1]].innerText;
    let val3=boxes[pattern[2]].innerText;

    if(val1 !="" && val2!="" && val3!=""){
        if(val1===val2 && val2===val3 && val1===val3){
            // console.log("winner");
            showWinner(val1);
            // alert("winner")
        }
        if(count===9){
          showWinner(count)
        }
    }
  }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);