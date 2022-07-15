const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const ceu = document.querySelector('.game-board');

const jump = function () {
    mario.classList.add('jump');

    setTimeout(function () {
        mario.classList.remove('jump');
    }, 500);

}

const loop = setInterval(function () {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    //deixa o mario pulando automaticamente (hack)
  //   if (pipePosition >= 220 && pipePosition <= 250) {
  //       mario.classList.add('jump');

     //    setTimeout(function () {
   //        mario.classList.remove('jump');
    //    }, 500);
   // }

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { 
        //ele perdeu
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'
        ceu.style.background = 'linear-gradient(#fd0505, #000000)';

        setTimeout(function () {
            
            alert("Game Over")
        }, 500);
       
         
        clearInterval(loop);

    }
}, 10);

document.addEventListener('keydown', jump);