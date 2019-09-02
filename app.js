const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let go = document.getElementById('startGames')
let endGame = false;

let randomTime = (min, max) =>{
return Math.floor(Math.random() * (max -min)+ min);
}

let randomField = (holes) => {
    const num = Math.floor(Math.random() * holes.length);
    const hole = holes[num];
}

const bob = () =>{
    const time = randomeTime(200,1000)
    const hole = randomHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up');
        if (!endGame) 
        bob();
    }, time);
}
let startGame = () =>{
    scoreBoard.textContent = 0;
    endGame = fales;
    score = 0;
    bob();
    setTimeout (() => endGame = true, 3000)
}
let hit = () => {
    score++
    this.classList.remove('up');
    scoreBoard.textContent = score;
}
go.addEventListener("click", startGame());

mice.forEach(micky => micky.addEventListener("click", hit));

// let images = [`badGuy2.png`,`badGuy3.png`,`badGuy4.png`,`Hero.png`,`Hero2.png`,`Hero3.png`]

// for(i=0;i<images.length;i++){
// let random = Math.floor(Math.random() * images[i])
// image.src = `./img/${images[random]}`
// }

	

