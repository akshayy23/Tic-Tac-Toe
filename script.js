let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgbtn=document.querySelector("#newg");
let mess=document.querySelector("#msg");
let msdcon=document.querySelector(".msgContain");


// This is in 2nd branch

let turn0=true;  //PlayerX, PlayerO
let c=0;

const winPat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];



boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    // console.log("Box is clicked");
    if(turn0){
        box.innerText="O";
        box.style.color="Red";
        turn0=false;
    }
    else{
        box.innerText="X";
        box.style.color="Blue"
        turn0=true;
    }
    box.disabled= true;
    let win=checkWin();
    c++;
    if(c==9 && !win){
        gameDraw();
    }
    
});
});

const gameDraw= ()=>{
    mess.innerText = `The game is drawn`;
    msdcon.classList.remove("hide");
    btndisable();
}

const checkWin= () =>{
    for(pattern of winPat){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                // console.log("Winner", pos1);
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;
};

const showWinner = (winner)=> {
    mess.innerText = `Congratulation, Winner is ${winner}`;
    msdcon.classList.remove("hide");
    btndisable();
};
  
const btndisable= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled=false;  
        box.innerText="";
        msdcon.classList.add("hide");
    }
};

const resetGame = ()=>{
    turn0=true;
    enableboxes();
    c=0;
};

resetbtn.addEventListener("click",resetGame);
newgbtn.addEventListener("click",resetGame);
