const slides = document.querySelectorAll(".slide");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const current = document.getElementById("current");
const total = document.getElementById("total");

let index = 0;

total.innerHTML = slides.length;

function showSlide(i){

    slides.forEach(slide => slide.classList.remove("active"));

    slides[i].classList.add("active");

    current.innerHTML = i + 1;

}

next.onclick = () =>{

    index++;

    if(index >= slides.length){

        index = 0;

    }

    showSlide(index);

}

prev.onclick = () =>{

    index--;

    if(index < 0){

        index = slides.length - 1;

    }

    showSlide(index);

}

setInterval(()=>{

    index++;

    if(index >= slides.length){

        index = 0;

    }

    showSlide(index);

},4000);