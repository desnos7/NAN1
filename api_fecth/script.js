let contener= document.querySelector('.contener')
let image= document.querySelector('#image')
const imgUrl = "https://image.tmdb.org/t/p/w500"
data=[]

function contenu(donnee){
    return (`
    <div class='box'>
    <img src="${imgUrl+donnee.poster_path}" id="image" alt="">
       
        <p> ${donnee.original_title}</p>
      <span id="span1">${donnee.original_language}</span>
      <span id="span2">true french</span>
   </div> 
    `)
}
function generat_card(array){

    for (let i=0 ;i<array.length; i++){
        contener.innerHTML+=contenu(array[i])
    }

}






 window.addEventListener('load', async () =>{
     let data= await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false')

     data= await data.json();
     console.log(data.results)
     generat_card(data.results)
 })
