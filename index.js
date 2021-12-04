const array = ["Paris","Lyon","Montreal","Bordeau"]
const array1 = ["Paris", 33, ["Montreal","Bordeau"],true]

for (i = 0; i < array1.length; i++){
   // console.log(array1[i]);
   console.log(typeof array1 [i]);//m'indique les types de mon tableau
}
//permet de trier des choses
array1.sort();
console.log(array1);


//**************************************************************************************************** */

const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e)=>{ //j'actionne mon input 1

    changeLink(e.target.value);//récupère la valeur qui est à l'intérieur 2

if (link) {
    // on l'affiche 4
video.innerHTML = 
`<iframe width="1280" height="606" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
});

//on la traite 3
const changeLink = (linkToChange) =>{
    let embed = linkToChange.replace('watch?v=', "embed/");
    link = embed.split('&')[0];
    
}

