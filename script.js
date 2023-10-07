var timer = 3;
var score = 0;
var hitrn = 0;





function increaseScore(){
    score += 10;
    document.querySelector("#scorev").textContent=score;
}

function gethit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitv").textContent= hitrn;
}

function makeBubble(){
var bub ="";

for(var i=1;i<=133;i++){
   var rn =  Math.floor(Math.random()*10)
    bub += `<div class="bubble">${rn}</div>`;

}

document.querySelector('#panbtm').innerHTML= bub;

}

function runTimer(){
    var timerint= setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#Timerv").textContent=timer; 
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
    

}

document.querySelector("#panbtm").addEventListener("click",function(detail){
    var clickednum = Number(detail.target.textContent);
    if(clickednum===hitrn){
    increaseScore();
    gethit();
    makeBubble();
    }

});

gethit();
runTimer();
makeBubble();