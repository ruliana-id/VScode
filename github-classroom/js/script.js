
// FORM VALIDATION

let submit = document.getElementById('submit');
let option = document.getElementById('options');
let name = document.getElementById('name');
let phone = document.getElementById('number');
submit.addEventListener('click', function(){
   
    if (name.value == '' || phone.value == '' || options.value == '') {
        alert('tidak boleh ada yang kosong')
    } else {
        alert('Haiii... ' + name.value + '\n' + phone.value + ' Ini adalah nomor anda' + '\n' + 'anda memilih peminatan ' + option.value);
    }
})

// AUTOSLIDE

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('br-image');
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display ='block';
    setTimeout(showSlides, 2500);
}