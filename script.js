const API_KEY = 'api_key=a8a697b80304508116ab36bee8914769';
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const searchURL = BASE_URL + '/search/movie?' + API_KEY
// element creation
// attribute
// append 

fetch (API_URL)
    . then(res => res.json())
    .then (data => {
        console.log(data);
        for(r = 0; r < 20; r++){
      var img = document.createElement("img");
      var  movie = document.getElementsByClassName("movie-img")[0];
      var Id = r;
      movie.appendChild(img);
      img.setAttribute("id", Id);
      document.getElementById(Id).src = IMG_URL + data.results[r].poster_path;
      document.getElementById(Id).style.margin = "20px 0px 0px 40px"; 
        }    
    })
fetch('https://api.themoviedb.org/3/search/movie?api_key=a8a697b80304508116ab36bee8914769')
. then (res => res.json)
. then (data => {
  console.log(data);
})   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function getMealList(){
    //     let searchInputTxt = document.getElementById('search-input').value.trim();
    //     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         let html = "";
    //         if(data.meals){
    //             data.meals.forEach(meal => {
    //                 html += `
    //                     <div class = "meal-item" data-id = "${meal.idMeal}">
    //                         <div class = "meal-img">
    //                             <img src = "${meal.strMealThumb}" alt = "food">
    //                         </div>
    //                         <div class = "meal-name">
    //                             <h3>${meal.strMeal}</h3>
    //                             <a href = "#" class = "recipe-btn">Get Recipe</a>
    //                         </div>
    //                     </div>
    //                 `;
    //             });
    //             mealList.classList.remove('notFound');
    //         } else{
    //             html = "Sorry, we didn't find any meal!";
    //             mealList.classList.add('notFound');
    //         }
    //     }
    // }    