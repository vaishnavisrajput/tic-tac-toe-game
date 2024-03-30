const box = document.querySelectorAll(".box")
const resetBtn = document.querySelector(".reset-button")
let turn0 = true;
box.forEach((element) => {
    element.addEventListener("click", () =>{
        if(turn0 === true){
            element.innerHTML = "O"
            turn0 = false;
        }
        else{
            element.innerHTML = "X"
            turn0 =true;
        }
        element.disabled = true;
    })
})
const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];
const checkWinner = ()=> {
    winningPattern.forEach((winner) => {
        if(winner[0] === winner[1] && winner[1] === winner[2]){
            console.log("winner")
        }
    })
}
checkWinner();

