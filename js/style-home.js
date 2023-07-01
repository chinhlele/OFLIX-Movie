// banner--->

let slide = document.querySelectorAll(".banner .slide");
let next = document.querySelector(".banner .next");
let prev = document.querySelector(".banner .prev");
let currentIndex = 0;
let prevIndex = 0;

function displaySlide() {
    slide[currentIndex].classList.add("active");
    slide[prevIndex].classList.remove("active");
}

setInterval(() => {
    nextSlide();
}, 4500);

next.addEventListener("click", function () {
    nextSlide();
});

function nextSlide() {
    if (currentIndex < slide.length - 1) {
        currentIndex++;
        prevIndex = currentIndex - 1;
    } else {
        currentIndex = 0;
        prevIndex = slide.length - 1;
    }
    displaySlide();
}

prev.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        prevIndex = currentIndex + 1;
    } else {
        currentIndex = slide.length - 1;
        prevIndex = 0;
    }
    displaySlide();
});

// banner--->

// list film--->

let listNowPlaying = document.querySelector("#now-playing");
let upcomingMovie = document.querySelector("#Upcoming-movie");
let topRatedMovie = document.querySelector("#Top-Rated-Movies");
let worldBest = document.querySelector("#World-Best");

async function renderAllFilm() {
    let dataNowPlaying = await getData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`);
    renderFilm(dataNowPlaying, listNowPlaying);
    let dataComingMovie = await getData(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`);
    renderFilm(dataComingMovie, upcomingMovie);
    let dataTopRated = await getData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`);
    renderFilm(dataTopRated, topRatedMovie);
    let dataWorldBest = await getData(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=1`);
    renderFilm(dataWorldBest, worldBest);
    console.log(dataWorldBest);
}
renderAllFilm();
