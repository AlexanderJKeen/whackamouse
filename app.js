// const field = document.getElementsByClassName('field')
const total1 = document.getElementById('score');
const hero = document.getElementsByClassName('mrbump')
console.log(hero)
const image = [`badGuy.png`,`mrbump.png`]
const start = document.getElementById('startButton')
let total = 0;

start.addEventListener('click', () => {
    setInterval(run , 3000)

 })

 const run = () => {
    // for(hero[i] = hero[i].style.animationPlayState = "paused")
    let random = Math.floor(Math.random() * 6)
    hero[random].style.animationPlayState = "running";
    hero[random].style.backgroundImage = "field.png"
    
    setTimeout(() => hero[random].style.animationPlayState = "paused", 3000)
    // if()
 }
 

for(i = 0;i<hero.length;i++) {
    
    hero[i].addEventListener("click", () => {
        total = total +=1 
        total1.textContent = total
        
       if (event.target.className == "mrbump"){
           console.log(event.target.style)
       }
        if (total == 4){
            total = 0;
        }

        // if (hero[i].style.backgroundImage = `./${image[1]}`){
        //             total = total - 1
        //             total1.textContent = total
        // }
        
    })
}

// if (total == ){
// }
// if (total === 4){
//     hero[i].removeEventListener("click", myFunction)
// let random = Math.floor(Math.random() * 6)
//     image.style.url = `./img/${images[random]}`
//     if (image.style.url = `./img/${images[0]}`)
