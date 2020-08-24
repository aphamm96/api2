const key = "7a2a933f48cb2de824f622d8e67bcbf5";
function fetchResults(e){
  e.preventDefault();
  console.clear();
fetch("https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",{
  method: "Post",
  headers: {
      'Accept': 'application/json',
      'user-key': key
  },
   body: "fields name, summary, url, popularity; limit 100; sort popularity desc;"
})
  .then(function(result){
    console.log(result)
    return result.json();
  })
  .then(function(json) {
      console.log(json);
      displayResults(json);
  })
  .catch(function(err){
      console.error(err);
  });
}
const searchPull = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
searchForm.addEventListener('submit', fetchResults);

  function displayResults(json) {
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }
    // let responses = json;
    for (let i = 0; i < json.length; i++) {
    let game = document.createElement('game');
    let name = document.createElement('h3');
    let gameSummary = document.createElement('h5');
    let summary = document.createElement('p');
    let ranking = document.createElement('h5');
    let popularity = document.createElement('p'); //name
    let link = document.createElement('h5');
    let url = document.createElement('a'); //url
    let placement = document.createElement('h2');
    let current = json[i];
          console.log(current);
          name.textContent= current.name;
          placement.textContent = i+1;
          url.textContent= current.url;
          url.href = current.url;
          gameSummary.textContent = "About this game:";
          ranking.textContent= "Popularity Score:";
          popularity.textContent = current.popularity;
          summary.textContent = current.summary;
          link.textContent = "Link to more information about this game:";
          game.setAttribute('class', 'game');
          game.appendChild(placement);
          game.appendChild(name);
          game.appendChild(gameSummary);
          game.appendChild(summary);
          game.appendChild(ranking);
          game.appendChild(popularity);
          game.appendChild(link);
          game.appendChild(url);
          section.appendChild(game);
          console.log(game);
        }
    }