let information = document.querySelector(".information")
const imgUrl = "https://image.tmdb.org/t/p/w500"
let datas = localStorage.getItem("infos")
datas = JSON.parse(datas)
 

let info = `<div class="inform1">
<img src="${imgUrl+datas.poster_path}" id="image" alt="">
</div>
<div class="inform2">
<p>
${datas.overview}
</p>
</div>`

information.innerHTML=info


