
// let button1=document.querySelector("#inscrip")


// let name = document.getElementById('usemail');
// let pw = document.getElementById('usepass');

// button1.addEventListener('click',function(e){
// e.preventDefault;
//    let utilisateur={
//             name:usemail.value,
//             password: usepass.value
//    }
//    localStorage.setItem('name',JSON.stringify(utilisateur))


//  document.location.reload();
// })
let mail = document.getElementById('usemail');
let pw = document.getElementById('usepass');
// storing input from register-form
function store(e) {
   
    localStorage.setItem('name', mail.value);
    localStorage.setItem('pw', pw.value);
   
    document.location.reload();
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
        alert('ERROR.');
    }
}









