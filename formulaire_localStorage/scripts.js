let buton2=document.getElementById('con')

buton2.addEventListener('click',function(e){

e.preventDefault;



let email= document.querySelector('#mail').value
let pass= document.querySelector('#pass').value

let username=localStorage.getItem('usemail')
let userpass=localStorage.getItem('usepass')

if(email !==username && pass ==userpass){
    alert('result')
}else{
    alert('salut')
}

document.location.reload();
})
