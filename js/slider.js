// let offset = 0;
// const slider = document.querySelector('.slider-line')
// 
// const sliderDots = document.querySelectorAll('.slider-dots span')
// const discountArrow = document.querySelector('.discount__arrow')

// document.querySelector('.discount__arrow').addEventListener('click', function() {
//    
    
//     offset -= 557;
//     if(offset < -1671) {
//         offset = 0;
//     }
//     slider.style.left = offset + 'px';
// })



const sliderLine = document.querySelector('.slider-line')
const images = document.querySelectorAll('.slider-wrapper .slider-line img')
const sliderDots = document.querySelectorAll('.slider-dots span')
const nextBtn = document.querySelector('.discount__arrow')
const nextBtnS = document.querySelector('.discount__arrow-s')
let count = 0;
let width;
let startSliderIndex = 0;


showSlider()
window.addEventListener('resize', showSlider)


function showSlider() {
    width = document.querySelector('.slider-wrapper').offsetWidth;
    sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => item.style.width = width * 'px');
    rollSlider();
}





function nextSlide() {
    count++;
    if(count >= images.length) {
        count = 0;
    }
    rollSlider();
}

nextBtn.addEventListener('click', function() {
    nextSlide()
    startSliderIndex++;
    if (startSliderIndex > sliderDots.length - 1) {
        startSliderIndex = 0;
    }
    for (let i = 0; i < sliderDots.length; i++) {
        if(i == startSliderIndex) {
            sliderDots[i].classList.add('active')
        } else {
            sliderDots[i].classList.remove('active')
        }
    }
})

nextBtnS.addEventListener('click', function() {
    nextSlide()
    startSliderIndex++;
    if (startSliderIndex > sliderDots.length - 1) {
        startSliderIndex = 0;
    }
    for (let i = 0; i < sliderDots.length; i++) {
        if(i == startSliderIndex) {
            sliderDots[i].classList.add('active')
        } else {
            sliderDots[i].classList.remove('active')
        }
    }
})

function rollSlider() {
    sliderLine.style.transform = `translate(${- count * width}px)`;
}