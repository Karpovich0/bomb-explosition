// Время у минутах. Формат – цифры БЕЗ скобок.
let time = 15;
// Пароль. Формат – разные символы У скобка.
let password = "Pass123";

//HTML tags
let bombTimer = document.querySelector(".bomb__timer");
let imgBomb = document.querySelector(".bomb__img--bomb");
let imgExplosion = document.querySelector(".bomb__img--explosion");
let inputWrapper = document.querySelector(".bomb__input-wrapper");
let resultTextArray = document.querySelectorAll(".bomb__result");

let timeInSeconds = (time*60)-1;

if(time<10){
    bombTimer.innerHTML = `0${time}:00`;
}else{
    bombTimer.innerHTML = `${time}:00`;
}

let interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    if (timeInSeconds < 1) { //stop the setInterval whe time = 0 for avoid negative time
        stopTimer();            
        bombExplosion();
        showResultText(2);
        return;
    }
    let minutes = Math.floor(timeInSeconds / 60); // rounds a number DOWN to the nearest integer
    let seconds = timeInSeconds % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds; 
    
    bombTimer.innerHTML = `${minutes}:${seconds}`;

    timeInSeconds--;   
     
}
function checkCode(e){
    let code = e.value;
    if(code === password){        
        stopTimer();
        showResultText(3);
        inputWrapper.classList.add("bomb__input-wrapper--hidden");
    }else{   
        stopTimer();          
        bombExplosion();
        showResultText(1);   
    }
}
function stopTimer(){
    clearInterval(interval);
}

function bombExplosion(){
    inputWrapper.classList.add("bomb__input-wrapper--hidden");
    imgBomb.classList.add("bomb__img--hidden");
    bombTimer.classList.add("bomb__timer--hidden");
    imgExplosion.classList.remove("bomb__img--hidden");
}

function showResultText(index){
    resultTextArray[0].classList.remove("bomb__result--visible");
    resultTextArray[index].classList.add("bomb__result--visible");
}