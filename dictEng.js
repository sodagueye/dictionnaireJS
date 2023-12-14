let wrapper = document.querySelector(".wrapper");
let searchInput = document.querySelector("input");
let infoText = document.querySelector(".info-text");
let synonyms = document.querySelector(".synonyms .list");
let sound = document.getElementById("sound");
let audio=document.getElementById("audioB");

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
        // let sound = document.getElementById("sound");
        let son =`Accent americain <br><audio src=${result[0].phonetics[0].audio} controls ></audio>`
        sound.innerHTML = son;
     
        let sonB =`Accent britanik <br><audio src=${result[0].phonetics[1].audio} controls ></audio>`
       audio.innerHTML = sonB;
       
   }
     sound.innerHTML += "";
    audio.innerHTML += "";
    
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

});

