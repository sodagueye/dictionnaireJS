const wrapper = document.querySelector(".wrapper");
const searchInput = document.querySelector("input");
const infoText = document.querySelector(".info-text");
const synonyms = document.querySelector(".synonyms .list");
const volume =document.querySelector(" audio")
let audio;
// Fonction de données 
function data(result ,word){
    //  console.log(result)
    if(result.title){
        // message erreur
        infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    }else{
        console.log(result);
        wrapper.classList.add("active");
        let definitions=result[0].meanings[0].definitions[0];
        //passons les données de réponse particulières à un élément HTML particulier
         document.querySelector(".word p ").innerText=`Word title :${result[0].word}`;

         document.querySelector(".meaning span").innerText= definitions.definition;
    
        // creating new audio obj and passing audio src
        audio =new Audio("https:"+result[0].phonetics[0].audio) ;
        

    }
}
// flech api function
function fetchApi(word){
    infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
   fetch(url)
  .then(res => res.json())
  .then(result => data(result ,word));


}
searchInput.addEventListener(`keyup`,e => {
    if(e.key== "Enter" && e.target.value){
        fetchApi(e.target.value)
}
//  searchInput.value="";
});
volume.addEventListener('click',()=>{
    audio.play();
});

