let inscription= document.querySelector('.inscription')
let connexion= document.querySelector('.connexion')
let mail = document.getElementById('usemail');
let pw = document.getElementById('usepass');
let span =document.querySelector('#spn1')


let contener= document.querySelector('.contener')

let information= document.querySelector('.information')
// storing input from register-form

function verifie(){
    let  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let password=/^[A-Za-z]\w{7,14}$/;
    if (pw.value.match(password)&& mail.value.match(mailformat)){
        pw.style.border='2px solid green'
      return true;
    }else{
        pw.style.border='2px solid red' 
        return false;
    }
}



function store() {
   
   
    if (verifie()){
        localStorage.setItem('name', mail.value);
        localStorage.setItem('pw', pw.value);     
        window.open('http://127.0.0.1:5500/connexion.html')
    }else{
        span.style.display='block'
    }
   

    
    
    // document.location.reload();
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
   let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    let userName = document.getElementById('umail');
    let userPw = document.getElementById('upass');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
          window.open('http://127.0.0.1:5500/index.html')

    }else {
        alert('ERROR.');
    }
}
// formulaire

let input =document.querySelector('#input').value;

let image= document.querySelector('#image')
const imgUrl = "https://image.tmdb.org/t/p/w500"
data=[]


function contenu(donnee){
    return (`
    <div class='box' id=${donnee.id} onclick="generate_information(event)">
    <img src="${imgUrl+donnee.poster_path}" id="image" alt="">
       
        <p id="id" class='name'> ${donnee.original_title}</p>
      <span id="span1">${donnee.original_language}</span>
      <span id="span2">true french</span>
   </div>`)
}





function generat_card(array){

    for (let i=0 ;i<array.length; i++){
        contener.innerHTML+=contenu(array[i])
             
    }

}
async function generate_information(e){
    let id = e.target.parentElement.id
    
   let data= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7843f8d22a43911f15301ef8d76338ae&language=en-US`)
   data= await data.json();
   localStorage.setItem("infos", JSON.stringify(data))
     
   

    }



 window.addEventListener('load', async () =>{
     let data= await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false')

     data= await data.json();
     generat_card(data.results)
       
     console.log(data.results);


     let child= contener.children
 for( let i=0; i<child.length; i++)
        child[i].addEventListener('click',()=>{
               window.open('http://127.0.0.1:5500/information.html')

        })


 })
 
// inputnrecherche

let put= document.querySelector('#input')
   
     
   put.addEventListener('input',searc)
   
    function search(){
        let put= document.querySelector('#input');
        let filtre= put.value.toLowerCase();
        let titles = document.querySelectorAll('#id');
        
       for(let i=0; i < titles.length; i++){
           if(titles[i].textContent.toLowerCase().includes(filtre.toLowerCase()))
            {
              titles[i].parentElement.style.display=' ' 
           }else{
               titles[i].parentElement.style.display='none'  
           }
           
       }
    }


