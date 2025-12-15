/* Making all the scores 0 for the first q */


let JingTotal = 0;
let ForsakenTotal = 0;
let PatmenTotal = 0;
let DavaiTotal = 0;
let SomethingTotal = 0;



let player = '';

let Questions = Array(10).fill(null);



// variable to keep track

  





function Question(Qnum, player, button){
    if (Questions[Qnum] === 'Jing') JingTotal--;    /* If at first they clicked Jing, then changed their mind in the same question, it will minus 1 from jing since it added 1 to him. */
    if (player === 'Jing') JingTotal++;             /* Adds to jing if its selected */

    if (Questions[Qnum] === 'Forsaken') ForsakenTotal--;
    if (player === 'Forsaken') ForsakenTotal++;

    if (Questions[Qnum] === 'Patmen') PatmenTotal--;
    if (player === 'Patmen') PatmenTotal++;

    if (Questions[Qnum] === 'Davai') DavaiTotal--;
    if (player === 'Davai') DavaiTotal++;

    if (Questions[Qnum] === 'Something') SomethingTotal--;
    if (player === 'Something') SomethingTotal++;
    
    Questions[Qnum] = player;                       /* Stores it incase of answer change */

   


    const buttons = button.parentElement.querySelectorAll("button");    /*Puts all the buttons in the parent element in an array */
    
    for (let i = 0; i < buttons.length; i++)      /*Removes the class "selected" from all of the buttons, in case of mind change again*/
        buttons[i].classList.remove("selected")
    
    button.classList.add("selected");             /* Adds the class "selected" to the button clicked so it glows and they know which one they picked */

    document.getElementById("score").textContent = `${JingTotal} and ${ForsakenTotal} and ${PatmenTotal} and ${SomethingTotal} and ${DavaiTotal}`;
}

function Submit(){
    var a = document.getElementById("Answers"); /*Removes multiple choice questions */
    {
        a.style.display = "none";
    }
    
    var b = document.getElementById("intro") /*Remove beggining text */
    {
        b.style.display = "none";
    }

    var c = document.getElementById("ThankYouText") /*Shows text at the bottom of the results */
    {
        c.style.display = "block";
    }

    var d = document.getElementById("RetakeRosters")
    {
        d.style.display = "flex";
    }

    var Winner = Math.max(JingTotal, ForsakenTotal, PatmenTotal, DavaiTotal, SomethingTotal);

        
    
    if (JingTotal == Winner)
        var e = document.getElementById("Jing")
        
        {
            e.style.visibility = "visible";
            e.style.display = "flex";
        }

        var f = document.getElementById("JingBox")
        {
            f.style.display = "block";
        }

    

    
}

