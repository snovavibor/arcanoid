function move(e) {

    if (e.offsetX < area.offsetWidth - xPlatform.width / 2 && e.offsetX > xPlatform.width / 2)
        platform.style.left = e.offsetX - xPlatform.width / 2 + 'px';
}

function moveBall() {

    document.getElementById('score').innerHTML = 'YOU SCORE : ' + score;
    if (x > area.offsetWidth - ball.offsetWidth) {
        leftR = false;
        step += 0.01;
    }
    if (x <= 0) leftR = true;
    if ((y >= area.offsetHeight - (xPlatform.height + ball.offsetHeight)) &&
        (x > parseInt(platform.style.left) - ball.offsetWidth) &&
        (x < parseInt(platform.style.left) + platform.offsetWidth)) {
        upD = false;
        step += 0.3;
        if (step > 3) score += 10;
        else score += 5;    
    }

    if (y <= 0) upD = true;


    if (!leftR) x -= step;
    if (leftR) x += step;
    if (!upD) y -= step;
    if (upD) y += step;

    if (y >= area.offsetHeight - ball.offsetHeight) {
        clearInterval(time);
        clearInterval(timeRR);
        document.getElementById('end').style.display = 'block';
        document.getElementById('end').innerHTML+='\n arkanoid  '+count+'  levels';
    }


    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

function timer(){
    
stepTime++;
timers.innerHTML = 'TIME '+a+b+':0'+stepTime;
if(stepTime > 9) timers.innerHTML = 'TIME '+a+b+':'+stepTime;
if(stepTime > 59) 
{
    stepTime=0;
    b++;
    timers.innerHTML = 'TIME '+a+b+':0'+stepTime;
    step=step-3;
    count++;
    stepCount.innerHTML=count+' level finished';
    
}
if(b>9){
    a++;
    timers.innerHTML = 'TIME '+a+b+':'+stepTime;
}

};



let score = 0;
let leftR = upD = true;
let x = y = 0;
let step = 2;
let area = document.getElementById('area');
platform = document.getElementById('platform');
ball = document.getElementById('ball');
let xPlatform = platform.getBoundingClientRect();
area.addEventListener('mousemove', move);

let timers = document.getElementById('timer');
console.log(timers);
let stepTime =0;

let a=b=0;
let count = 0;
let stepCount = document.getElementById('count');

let time = setInterval(moveBall, 1);
let timeRR = setInterval(timer, 1000);
