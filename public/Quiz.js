/* Making all the scores 0 for the first q */


let JingTotal = 0;
let ForsakenTotal = 0;
let PatmenTotal = 0;
let DavaiTotal = 0;
let SomethingTotal = 0;

let JingScore = 0; 
let ForsakenScore = 0;
let PatmenScore = 0;
let DavaiScore = 0;
let SomethingScore = 0;

let player = '';

let Questions = Array(10).fill(null);



// variable to keep track

  





function Question2(Qnum, player, button){
    if (Questions[Qnum] === 'Jing') JingTotal--;
    if (player === 'Jing') JingTotal++;
    Questions[Qnum] = player;

    document.getElementById('score').innerHTML = 'Score' + JingTotal;


    const buttons = button.parentElement.querySelectorAll("button");
    
    for (let i = 0; i < buttons.length; i++)
        buttons[i].classList.remove("selected")
    
    button.classList.add("selected");
}


function Question3(Qnum, player, button){
    if (Questions[Qnum] === 'Jing') JingTotal--;

    if (player === 'Jing') JingTotal++;

    Questions[Qnum] = player;

    document.getElementById('score').innerHTML = 'Score' + JingTotal;
}   