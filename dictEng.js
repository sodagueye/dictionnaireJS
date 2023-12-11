const wrapper = document.querySelector(".wrapper");
const searchInput = document.querySelector("input");
const infoText = document.querySelector(".info-text");
// data functon
function data(result ,word){
    console.log(result)
}
// flech api function
function fetchApi(word){
    // infoText.style.color ="#000"
    infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    let url=`https://api.dictionaryapi.dev/api/v2/entries/en/<word>`;
    // fetching api response and returning it parsing into js obj and in nather then 
    // method calling data function with paasing api response and searched word as an argument
  fetch(url).then(res => res.json()).then(result => data(result ,word));


}
searchInput.addEventListener("keyup",e => {
    if(e.key=="Enter"&& e.target.value){
        fetchApi(e.target.value)
}
//  searchInput.value="";
});

