const field = document.getElementsByClassName('field')
const total1 = document.getElementById('score');
const hero = document.getElementsByClassName('mrbump')
const image = [`./badGuy.png`,`./mrbump.png`]
let total = 0;
let random = Math.floor(Math.random * 6)
for(i =0;i<hero.length;i++){
hero[i].addEventListener("click", event1 => {
    total = total +=1 
    total1.textContent = total
})
}
// let random = Math.floor(Math.random() * 6)
//     image.url = `./img/${images[random]}`
//     if (image.url = `./img/${images[0]}`){ 
// } else if (image.src = `./img/${images[1]}`){
//     total = total - 1
//     total1.textContent = total
//  }
 // if (total === 4){
    //     hero[i].removeEventListener("click", event1)