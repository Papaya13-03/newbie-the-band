// slider processing
var sliderListItem = document.querySelectorAll('#slider .box');
var currentSliderImg = 0;

function showSlider(index) {
    sliderListItem[index].style.display = "block";
}

function hideSlider(index) {
    sliderListItem[index].style.display = "none";
}

showSlider(currentSliderImg);

setInterval(() => {
    currentSliderImg ++;
    currentSliderImg %= 3;
    sliderListItem.forEach((val, index)=>{
        if(index != currentSliderImg)
            hideSlider(index);
        else showSlider(index);
    });
}, 3000);


// Modal processing

var modal = document.querySelector('.modal');
var modalWrap = document.querySelector('.modal .wrap');
var closeModal = document.querySelector('.modal .close-icon');
var buyTicketButtons = document.querySelectorAll('.buy-ticket-boxes button')
function showModal() {
    modalWrap.style.opacity = "1";
    modal.style.visibility = 'visible';
    modalWrap.style.transition = "0.5s";
    modalWrap.style.top = "20%";
}

function hideModal() {
    modalWrap.style.transition = "0s";
    modalWrap.style.top = "0";
    modalWrap.style.opacity = "0";
    modal.style.visibility = 'hidden';
}

closeModal.addEventListener('click',hideModal);

modalWrap.addEventListener('click',(e)=>{
    e.stopPropagation();
}); 
 
modal.addEventListener('click',hideModal);

buyTicketButtons.forEach((value)=>{
    value.addEventListener('click',showModal);
});


// Mobible Open Nav bar

var mobileOpenNav = document.querySelector('.mobile-open-nav');
var mobileNav = document.querySelector('.mobile-nav-select');
var mobileHomeBtn = document.querySelector('#mobile-home');

mobileOpenNav.addEventListener('click',(e)=>{
    mobileNav.classList.toggle('hide-on-mobile');
    e.stopPropagation();    
});

mobileNav.addEventListener('click',(e)=>{
    mobileNav.classList.add("hide-on-mobile");
    e.stopPropagation();
});

mobileHomeBtn.addEventListener('click',(e)=>{
    mobileNav.classList.add("hide-on-mobile");
    e.stopPropagation();
});