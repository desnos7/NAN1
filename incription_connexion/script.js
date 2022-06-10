let inscription= document.querySelector('.inscription');
let connexion= document.querySelector('.connexion');
let mail = document.getElementById('usemail');
let pw = document.getElementById('usepass');
let look= document.querySelector('#check');
console.log(look);


look.addEventListener('click',function looking(){
   
    if(look.checked){
        
        inscription.style.transform='translateX(-110%)'
        inscription.style.transition='2s ease-in-out'
        connexion.style.transform='translateX(117%)'
        connexion.style.transition='2s ease-in-out'

    }else{
        connexion.style.transform='translateX(-100%)'
        inscription.style.transform='translateX(0)'
        connexion.style.transition='2s ease-in-out'
        inscription.style.transition='2s ease-in-out'
    }


})



function store(e) {
   
    localStorage.setItem('name', mail.value);
    localStorage.setItem('pw', pw.value);
     inscription.style.transform='translateX(-110%)'
     connexion.style.transform='translateX(117%)'
     look.checked=true;
     looking()
     
   
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
        alert('You are loged in.');
    }else {
        connexion.style.transform='translateX(-100%)'
        inscription.style.transform='translateX(0)'
    }
}
