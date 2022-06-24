 let cards= document.querySelectorAll('.card-box4')
 let nbCard= cards.length;
 let suivant= document.querySelector('#left');
 let precedent= document.querySelector('.right');
 let count= 0;


 function slide1(){
     cards[count].classList.remove('active');
   if (count<nbCard -1){
    count++;
   }
   else{
       count=0;
   }
   cards[count].classList.add('active')

 }
 suivant.addEventListener('click',slide1)