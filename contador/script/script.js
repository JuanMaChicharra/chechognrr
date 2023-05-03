let increment = 0;

let show = document.querySelector(".show")

let cuerpo = document.querySelector(".container")
 
document.addEventListener("click",(e)=>{
    console.log(e)
    if(e.target.matches("#DECREMENTAR")){
        increment--
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rgb(255, 37, 71)";
        document.getElementById("img").src=`../img/2.jpg`
     
    } 
     if (e.target.matches("#RESETEAR")){
        increment = 0
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rgb(206, 255, 8)";
        document.getElementById("img").src=`../img/1.jpeg`
    } 
     if (e.target.matches("#INCREMENTAR")){
        increment++
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rgb(87, 192, 183)";
        document.getElementById("img").src=`../img/3.jpg`
        
    }

})
