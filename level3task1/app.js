const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn')
const imgList = ["1","2","3","4"]


btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index = imgList.length-1;
            }
            container.style.background = `url("Imgs/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index===imgList.length){
                index = 0;
            }
            container.style.background = `url("Imgs/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})
const slides = document.querySelectorAll('.slide');
const slideshow = document.querySelector('.slideshow');
let index = 0;

function nextSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    const translateX = -index * 100;
    slideshow.style.transform = `translateX(${translateX}%)`;
}

setInterval(nextSlide, 3000); // Change image every 3 seconds
