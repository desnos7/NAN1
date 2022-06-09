let contener = document.querySelector('.main')
let icon = document.querySelector('.icon')
let search = document.querySelector('#search')
let form = document.querySelector('#form')
console.log(search);
let imgUrl = "https://image.tmdb.org/t/p/w500"
let 

let searchValue
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchValue = search.value  
    console.log(searchValue);

if(searchValue && searchValue !==''){
  
    searchValue=''
} else {
    window.location.reload();
}
  })



async function gene_search(){
  
   let dat= await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
   dat= await dat.json();
  
//    contenu(dat.results)
   
  

    }
    gene_search() 

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
    
    
    
    
    
    // function generat_card(array){
    //     contener.innerHTML==''
    
    //     for (let i=0 ;i<array.length; i++){
    //         contener.innerHTML+=contenu(array[i])
                 
    //     }
    
    // }
    
