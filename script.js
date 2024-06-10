let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn0 = true;
const winnpat = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = turn0 ? "O" : "X";
            turn0 = !turn0;
            
            if (!checkWin() && checkDraw()) {
                alert("It's a draw!");
                resetGame();
            }
        }
    });
});
