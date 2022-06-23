
$('.contenu').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

const toTop= document.querySelector('#to-top')

window.addEventListener('scroll',()=>{
    if(window.pageYOffset> 100){
     toTop.classList.add('active');
    }else{
        toTop.classList.remove('active') 
    }
}
)
