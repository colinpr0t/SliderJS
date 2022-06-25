// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)




const slideList = [{
 img: "images/img1.jpg",
 text: 'Przesuwaj'
},
{
 img: "images/img2.jpg",
 text: 'zdjęcia'
},
{
 img: "images/img3.jpg",
 text: 'strzałkami'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 3000;
let active = 0;



const keyChangeSlide = (e) => {
 switch(e.keyCode){
    case 37:
        clearInterval(Interval);
        if (active > 0) {
            active--;
        } else {
            active = slideList.length-1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()
        clearInterval(Interval);
        Interval = setInterval(changeSlide, time)
        
    break;

    case 39:
        clearInterval(Interval);
        
        active++;
        if (active === slideList.length) {
           active = 0;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()
        clearInterval(Interval);
        Interval = setInterval(changeSlide, time)
        
    break;

    default:
    break;
 }
}

const changeDot = () => {
 const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
 dots[activeDot].classList.remove('active');
 dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
 if (active === slideList.length) {
    active = 0;
   
}
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
 changeDot()
}
Interval = setInterval(changeSlide, time)



window.addEventListener('keydown', keyChangeSlide)