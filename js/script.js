/* Hamburger */
const hamburgerBtn = document.querySelector('.hamburgerBox');
const navigationList = document.querySelectorAll('.listContainer');

hamburgerBtn.addEventListener('click', function() {
    navigationList.forEach(element => {
        element.classList.toggle('navigation--active');
    });
})

/* Results of the week tab */
const weekResultTabs = document.querySelectorAll('.tab');
const weekResultPagination = document.querySelectorAll('.dot');
const nextTabBtn = document.querySelector('.nextBtn');
const prevTabBtn = document.querySelector('.prevBtn');

nextTabBtn.addEventListener('click', function() {
    weekResultTabs.forEach(element => {
        element.classList.toggle('active')
    })
    
    weekResultPagination.forEach(element => {
        element.classList.toggle('active')
    })

    prevTabBtn.classList.toggle('active')
})

prevTabBtn.addEventListener('click', function() {
    weekResultTabs.forEach(element => {
        element.classList.toggle('active')
    })
    
    weekResultPagination.forEach(element => {
        element.classList.toggle('active')
    })
})

/* Salads sliders */
const images = ['src/img/images/pngwing.com (2).png', 'src/img/images/pngwing.com (3).png', 'src/img/images/pngwing.com (2).png', 'src/img/images/pngwing.com (3).png'];
const productNames = ['Ensalada mixta', 'Ensalada con pollo', 'Ensalada César', 'Ensalada de Giroscopios'];
const caloriesValue = [243, 543, 324, 118];
const gramsValue = ['2,8g', '2,8g', '3,4g', '4,5g'];

const imageFirstSlider = document.querySelector('.firstSlider .imageSection img');
const imageSecondSlider = document.querySelector('.secondSlider .imageSection img');
const firstProductName = document.querySelector('.firstSlider .productInformationSection .productName');
const secondProductName = document.querySelector('.secondSlider .productInformationSection .productName');
const firstCalories = document.querySelector('.firstSlider .productInformationSection .makros .columns .col h2');
const secondCalories = document.querySelector('.secondSlider .productInformationSection .makros .columns .col h2');
const firstGrams = document.querySelector('.firstSlider .productInformationSection .makros .columns .col h2.grams');
const secondGrams = document.querySelector('.secondSlider .productInformationSection .makros .columns .col h2.grams');
const firstNextBtn = document.querySelector('.firstSlider .arrowSection .arrow .nextBtn');
const firstPrevBtn = document.querySelector('.firstSlider .arrowSection .arrow .prevBtn');
const secondNextBtn = document.querySelector('.secondSlider .arrowSection .arrow .nextBtn');
const secondPrevBtn = document.querySelector('.secondSlider .arrowSection .arrow .prevBtn');

let currentFirstSlide = 0;
let currentSecondSlide = 0;

function nextFirstSlide() {
    currentFirstSlide++;
    imageFirstSlider.src = images[currentFirstSlide];
    firstProductName.innerHTML = productNames[currentFirstSlide];
    firstCalories.innerHTML = caloriesValue[currentFirstSlide];
    firstGrams.innerHTML = gramsValue[currentFirstSlide];

    if(currentFirstSlide == images.length - 1) {
        firstNextBtn.classList.remove('active');
        firstPrevBtn.classList.add('active');
    }

}

function prevFirstSlide() {
    currentFirstSlide--;
    imageFirstSlider.src = images[currentFirstSlide];
    firstProductName.innerHTML = productNames[currentFirstSlide];
    firstCalories.innerHTML = caloriesValue[currentFirstSlide];
    firstGrams.innerHTML = gramsValue[currentFirstSlide];

    if(currentFirstSlide == 0) {
        firstNextBtn.classList.add('active');
        firstPrevBtn.classList.remove('active');
    }
}

function nextSecondSlide() {
    currentSecondSlide++;
    imageSecondSlider.src = images[currentSecondSlide];
    secondProductName.innerHTML = productNames[currentSecondSlide];
    secondCalories.innerHTML = caloriesValue[currentSecondSlide];
    secondGrams.innerHTML = gramsValue[currentSecondSlide];

    if(currentSecondSlide == images.length - 1) {
        secondNextBtn.classList.remove('active');
        secondPrevBtn.classList.add('active');
    }

}

function prevSecondSlide() {
    currentSecondSlide--;
    imageSecondSlider.src = images[currentSecondSlide];
    secondProductName.innerHTML = productNames[currentSecondSlide];
    secondCalories.innerHTML = caloriesValue[currentSecondSlide];
    secondGrams.innerHTML = gramsValue[currentSecondSlide];

    if(currentSecondSlide == 0) {
        secondNextBtn.classList.add('active');
        secondPrevBtn.classList.remove('active');
    }
}

firstNextBtn.addEventListener('click', nextFirstSlide);
firstPrevBtn.addEventListener('click', prevFirstSlide);

secondNextBtn.addEventListener('click', nextSecondSlide);
secondPrevBtn.addEventListener('click', prevSecondSlide);