

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    
async function playBtnAudio() {
     await eel.play_btn_sfx();
}

async function playSlideAudio() {
    await eel.play_slide_sfx();
}

async function playSwipeAudio() {
    await eel.play_swipe_sfx();
}

async function playWinAudio() {
    await eel.play_win_sfx();
}

async function playLoseAudio() {
    await eel.play_lose_sfx();
}

async function playDrawAudio() {
    await eel.play_draw_sfx();
}


const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const clearButton = document.getElementById('play-again')

const btn1 = document.getElementById('rock')
const btn2 = document.getElementById('paper')
const btn3 = document.getElementById('scissors')




let userChoice
let computerChoice
let result

const mainDiv = document.getElementById('main');


function stretchMainDiv() {
    playSlideAudio()
    let width = 290; 
    const finalWidth = 370; 
    const increment = 1; 
    const interval = 1; 
  
    const stretchInterval = setInterval(() => {
      if (width < finalWidth) {
        width += increment;
        mainDiv.style.height = `${width}px`; 
      } else {
        clearInterval(stretchInterval); 
      }
    }, interval);
  }
  
  
  async function handleChoice() {
    getResult();

    btn1.style.display = 'none';
    btn2.style.display = 'none';
    btn3.style.display = 'none';

    stretchMainDiv();   

    
   
    
    
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', () => {
    handleChoice();
}));



async function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
     

 
    
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its A Draw!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lost!'
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!'
    }
    
  
    
    setTimeout(function showClearBtn() {
     clearButton.style.display = "block";
     clearButton.style.cursor = 'pointer';
    }, 700)

    
}




async function displayWithSlideAnimation(elementId, content) {
    const element = document.getElementById(elementId);
    element.innerHTML = "ROCK PAPER SCISSORS...";
    
    element.style.outline = 'none';

    element.classList.add('animate-slide');

    setTimeout(() => {  
      element.classList.remove('animate-slide'); 
    }, 1000);   
    await sleep(2000)
    await playSwipeAudio()
    element.classList.add('slidess-animation'); 
    setTimeout(() => {
      element.classList.remove('slidess-animation'); 
    }, 1000);

    
    

    element.innerHTML = content;
    element.style.opacity = 1;
    element.style.outline = '3px solid black';
    element.classList.add('slides-animation'); 
    setTimeout(() => {
      element.classList.remove('slides-animation'); 
    }, 1000); 

    if (result === 'Its A Draw!'){
        playDrawAudio()
      }
    if (result === 'You Win!'){
        playWinAudio()
      }
    if (result === 'You Lost!'){
        playLoseAudio()
      }
  }
  
  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
      userChoice = e.target.id;
      displayWithSlideAnimation('user-choice', userChoice); 
      generateComputerChoice();
      getResult();
      displayWithSlideAnimation('computer-choice', computerChoice); 
      displayWithSlideAnimation('result', result); 


  }));



function clearPage() {
    playBtnAudio()
    location.reload();
}


const minWidth = 700; 
const maxWidth = 1900; 

let isLoaderActive = false; 

function applyResizeClass() {
  const currentWidth = window.innerWidth;

  if ((currentWidth <= minWidth || currentWidth >= maxWidth) && !isLoaderActive) {
    $('.loader_bg').fadeToggle();
    isLoaderActive = true; 
  } else if (currentWidth > minWidth && currentWidth < maxWidth && isLoaderActive) {
    $('.loader_bg').fadeToggle();
    isLoaderActive = false; 
  }
}


$(window).on('resize', applyResizeClass);


$(document).ready(function() {
  applyResizeClass();
});

window.addEventListener('resize', applyResizeClass);
window.addEventListener('DOMContentLoaded', applyResizeClass);