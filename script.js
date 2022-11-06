function navClick(name) {

    console.log(name);
    const boxes = document.querySelectorAll('.nav-option-item1, .nav-option-item2, .nav-option-item3, .nav-option-item4');


for (const box of boxes) {
    if (box.className === name) {
        box.classList.add('active');
    }else {
        box.classList.remove('active');
    }
    
  
}

}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
   
});

$(function() {
    var header = $(".nav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 970) {
            navClick(this.getAttribute('href'))
        } else {
            
        }
    });
});



