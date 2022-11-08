var sections = document.querySelectorAll('section');
onscroll = function(){
    var scrollPosition = this.document.documentElement.scrollTop;
    const boxes = document.querySelectorAll('.nav-option-item1, .nav-option-item2, .nav-option-item3, .nav-option-item4');
    sections.forEach(section=>{
        console.log(section.offsetTop -section.offsetHeight);
        if(scrollPosition >= section.offsetTop - 400 && scrollPosition < section.offsetTop + section.offsetHeight){
            console.log(section.id);
            var currentId = section.id
            for (const box of boxes) {
                box.classList.remove('active');
            }
            if(currentId != ''){
                this.document.querySelector(`ul > a[href="#${currentId}"]`).classList.add("active")
            }
        }
    })
}

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

// $(function() {
//     var header = $(".nav");
//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
    
//         if (scroll >= 970) {
//             navClick(this.getAttribute('href'))
//         } else {
            
//         }
//     });
// });



