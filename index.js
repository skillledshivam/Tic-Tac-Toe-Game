let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let newGamebtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let message = document.querySelector("#message")

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            box.classList.add("black")
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const showWinner = (winner) => {
    message.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const disbaleBoxes  = () => {
    for(let box of boxes) {
        box.disabled = true;

    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
}
const checkWinner = () => {
    for ( let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                console.log("winner",pos1val);

                showWinner(pos1val);
            }

        }
        
    }
}

const resetgame = () => {
    turnO  = true;
    enableBoxes();
    msgContainer.classList.add("hide")

}

newGamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)