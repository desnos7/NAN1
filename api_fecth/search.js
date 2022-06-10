let contener = document.querySelector('.main')
let icon = document.querySelector('.icon')
let searchs = document.querySelector('#search')
let form = document.querySelector('#form')
console.log(searchs);
let imgUrl = "https://image.tmdb.org/t/p/w500"
 

async function gene_search(e){
    e.preventDefault()
    let dat= await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchs.value}&api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
    dat= await dat.json();
    generat_card(dat.results)
 
     }



form.addEventListener('submit', gene_search)
function contenu(conte){
        contener.innerHTML='';
        return (`
        <div class='box' id=${conte.id} onclick="generate_information(event)">
        <img src="${imgUrl+conte.poster_path}" id="image" alt="">
           
            <p id="id" class='name'> ${conte.original_title}</p>
          <span id="span1">${conte.original_language}</span>
          <span id="span2">true french</span>
       </div>`)
    }
    
    
    
    
    
function generat_card(array){
        contener.innerHTML=''
    
        for (let i=0 ;i<array.length; i++){
            contener.innerHTML+=contenu(array[i])
                 
        }
    
    }
    
