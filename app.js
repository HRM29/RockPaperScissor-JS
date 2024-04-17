let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('message');
const userCard = document.getElementById('user-score');
const compCard = document.getElementById('comp-score');
const genCompChoice = ()=>{
    const choices = ['rock','paper','scissor'];
    const choiceIndx = Math.floor(Math.random()*3);
    return choices[choiceIndx];
}

const drawGame = ()=>{
    msg.style.backgroundColor = 'darkslategray';
    msg.innerText = "It's a Draw";
}
const showWinner= (result)=>{
    if(result){
        userScore++;
        userCard.innerText = userScore;
        msg.style.backgroundColor = 'green';
        msg.innerText = "You Won !!";
    } else{
        compScore++;
        compCard.innerText = compScore;
        msg.style.backgroundColor = 'red';
        msg.innerText = "You Lose !!";
    }
}
const playGame=(userChoice)=>{
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            //paper, scissor
            userWin = compChoice === 'paper'? false: true;
        } else if(userChoice === 'paper'){
            //rock, scissor
            userWin = compChoice === 'scissor'? false: true;
        } else{
            //rock, paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
      const userChoice = choice.getAttribute('id');
      playGame(userChoice);
    })
});