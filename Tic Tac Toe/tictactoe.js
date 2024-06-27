let boxes = document.querySelectorAll(".box");
let turnX = true;
let resetBtn = document.querySelector("#resetButton");
let messageContainer = document.querySelector(".message-container")
let newgameBtn = document.querySelector("#newgameBtn")
let c = 0

// for winning patterns
const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
//all functions
const disablebtn = () => {
    for (box of boxes) {
        box.disabled = true;
    }

}
const enablebtn = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (winner) => {
    document.querySelector(".winner").innerText = `Congratulations the winner is ${winner}`
    messageContainer.classList.remove("hide")
}
const showDraw =()=>{
    document.querySelector(".winner").innerText = "It's a Draw"
    messageContainer.classList.remove("hide")
    disablebtn();
}
const resetGame = () => {
    turnX = true;
    enablebtn();
    messageContainer.classList.add("hide");
    c = 0;
}

boxes.forEach((e) => {
    e.addEventListener("click", () => {
        if (turnX) {
            e.innerText = 'X';
            turnX = false;
        }
        else {
            e.innerText = 'O';
            turnX = true;
        }
        e.disabled = true;
        c += 1;
        if(c === 9){
            showDraw();
        }
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2!= "" && pos3!= "" ){
            if(pos1 == pos2 && pos2 == pos3){
                    disablebtn()
                    showwinner(pos1)

        }}
    }} 

    resetBtn.addEventListener("click", resetGame)
    newgameBtn.addEventListener("click", resetGame)
    