let input = document.querySelector("#fa")
let search=document.querySelector('#fa1')
let inp= document.querySelector('#input2')
let contenu= document.querySelector('.tache')

search.addEventListener('click',function(){
    
   

 let tab= ["salut","salle","salon","sourd"]
  for (let i=0 ; i < tab.length ;i++) {
     if(inp.value==tab[i]){
        return
     }   
  }
  let div=document.createElement('div')
  div.className="affiche"
  
  let tache =`
    <p>${inp.value}</p>
  `
  div.innerHTML=tache
   contenu.appendChild(div)
  
  inp.value='';
})
