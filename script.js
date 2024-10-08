let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let User=document.querySelector("#User");
let CPU=document.querySelector("#CPU");
let reset=document.querySelector("#reset");
const options=document.querySelectorAll(".options");

reset.onclick=()=>
{
    userScore=0;
    compScore=0;
    User.innerText=userScore;
    CPU.innerText=compScore;
    msg.innerText="Play your move!";
}
const draw=()=>
{
    msg.innerText="Draw :|";
}
const showWinner=(win)=>
{
    User.innerText=userScore;
    CPU.innerText=compScore;
    msg.innerText=win===true?" You win :)":" You lose.";

}
const play=(uc)=>{ 
    const cpu=cpuChoice();
    if(cpu==uc) draw();
    else 
    {
        let win=true;
        if(uc==="rock") win=cpu==="paper"?false:true;
    
        else if (uc==="paper") win=cpu==="scissors"?false:true;
        else win=cpu==="rock"?false:true;
        showWinner(win);
        if(win===true) userScore++;
        else compScore++;
    }
}
options.forEach((op)=>{
      op.addEventListener("click",()=>{ 
        let userChoice=op.getAttribute("id");
        play(userChoice);
      });
});

const cpuChoice=()=>
{
    const choiceList=["rock","paper","scissors"];
     let rl= Math.floor(Math.random()*3);
     return choiceList[rl];
}

