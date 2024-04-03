const box = document.querySelectorAll(".box")
const resetBtn = document.querySelector(".reset-button")
const winnerDiv = document.querySelector(".winnerDiv")
const msg = document.querySelector("p");

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
        checkWinner();
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
const showWinner = (winner) =>{
    msg.innerText = `Yayyy! Winner is ${winner}`
    winnerDiv.classList.remove("hide")
}



    const checkWinner = ()=> {
    for (let pattern of winningPattern){
        let val1 = box[pattern[0]].innerHTML;
        let val2 = box[pattern[1]].innerHTML;
        let val3 = box[pattern[2]].innerHTML;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                //console.log("winner", val1);
                showWinner(val1);
            }
        }
    }
}

resetBtn.addEventListener("click", () => {
    window.location.reload();
})
