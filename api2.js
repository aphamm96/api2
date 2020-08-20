const key = "7a2a933f48cb2de824f622d8e67bcbf5";
// function fetchResults(){
fetch("https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",{
  method: "Post",
  headers: {
      'Accept': 'application/json',
      'user-key': key
  },
  body: "fields name, summary, url, popularity; limit 72; sort popularity desc;"
})
  .then(function(result){
    console.log(result)
    return result.json();
  })
  .then(response => {
      console.log(response);
      displayResults(response);
  })
  .catch(err => {
      console.error(err);
  });
// }
const searchPull = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
// searchForm.addEventListener('submit', fetchResults);

  function displayResults(response) {
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }
    let results = response.name;
    let resultslink = response.url;
    let rating = response.popularity;
    let gameBio = response.summary;
    console.log(results);
          let result = document.createElement('result');

          let gameSummary = document.createElement('p');
          
          let gamerating = document.createElement('p'); //name
          
          let gamelink = document.createElement('a'); //url

          result.textContent=results;
          gamelink.textContent=resultslink;
          gamelink.href = resultslink;
          gamerating.textContent = rating;
          gameSummary.textContent=gameBio;
          result.appendChild(gameSummary);
          result.appendChild(gamerating);
          result.appendChild(gamelink);
          section.appendChild(result);
          console.log(section);
          console.log(gameSummary);
          console.log(gamerating);
          console.log(gamelink);
    }