window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    if (window.pageYOffset > 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

let menuActive = document.querySelectorAll(".header .menu ul li");
console.log(menuActive);

// header & footer--->

function renderHeader() {
    let frameHear = document.querySelector("#header");
    const url = new URL(window.location.href);
    const type = url.searchParams;
    console.log(url);
    frameHear.innerHTML = `<div class="header">
    <div class="container">
        <div class="frame">
            <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
            <div class="menu">
                <ul>
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="movies.html?type=tv">TV Shows</a></li>
                    <li><a href="movies.html?type=movie">Movies</a></li>
                    <li><a href="people.html">People</a></li>
                    <li class="genre">
                        <a href="javascript:;">Genre <i class="fa-solid fa-caret-down"></i></a>
                        <div class="subBars-child"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="search">
            <input type="text" placeholder="Search, people, genres" />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="fram">
            <div class="main-bars">
                <div class="icon-bars"></div>
            </div>
        </div>
        <div class="overlay">
            <div class="subBars">
                <ul>
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="movies.html?type=tv">TV Shows</a></li>
                    <li><a href="movies.html?type=movie">Movies</a></li>
                    <li><a href="people.html">People</a></li>
                    <li>
                        <a href="javascript:;" class="genres">Genres <i class="fa-solid fa-caret-down"></i></a>
                    </li>
                </ul>
                <div class="subBars-chill">
                    <i class="fa-solid fa-arrow-left"></i>
                    <div class="fra">
                        <a href="movies.html?type=Action&id=28">Action</a>
                        <a href="movies.html?type=Thriller&id=53">Thriller</a>
                        <a href="movies.html?type=Comedy&id=35">Comedy</a>
                        <a href="movies.html?type=Romance&id=10749">Romance</a>
                        <a href="movies.html?type=Adventure&id=12">Adventue</a>
                    </div>
                    <div class="fra">
                        <a href="movies.html?type=War&id=10752">War</a>
                        <a href="movies.html?type=Crime&id=80">Crime</a>
                        <a href="movies.html?type=Drama&id=18">Drama</a>
                        <a href="movies.html?type=Family&id=10751">Family</a>
                        <a href="movies.html?type=Mystery&id=9648">Mystery</a>
                    </div>
                    <div class="fra">
                        <a href="movies.html?type=Music&id=10402">Music</a>
                        <a href="movies.html?type=Horror&id=27">Horror</a>
                        <a href="movies.html?type=Fantasy&id=14">Fantasy</a>
                        <a href="movies.html?type=History&id=36">History</a>
                        <a href="movies.html?type=Western&id=37">Western</a>
                    </div>
                    <div class="fra">
                        <a href="movies.html?type=TV%20Movie&id=10770">TV Movie</a>
                        <a href="movies.html?type=Animation&id=16">Animation</a>
                        <a href="movies.html?type=Documentary&id=99">Documentary</a>
                        <a href="movies.html?type=Science%20Fiction&id=878">Science Fiction</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`;
}
renderHeader();

// foot--->

function renderFoot() {
    let frameFoot = document.querySelector("#footer");

    frameFoot.innerHTML = ` <div class="footer-top">
    <div class="container">
        <div class="foot-left">
            <p class="trail">TRIAL START FIRST 30 DAYS.</p>
            <p class="email">Enter your email to create or restart your membership.</p>
        </div>
        <div class="foot-right">
            <input type="text" placeholder="Enter your email" />
            <a href="javascript:;">Get Stared</a>
        </div>
    </div>
    </div>
    <div class="footer-bot">
    <div class="container">
        <div class="foot-bot">
            <div class="frame"><img src="img/logo.png" alt="logo" /></div>
            <div class="frame">
                <ul class="menu-foot">
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="movies.html?type=tv">TV Shows</a></li>
                    <li><a href="movies.html?type=movie">Movies</a></li>
                    <li><a href="people.html">People</a></li>
                </ul>
            </div>
            <div class="frame">
                <ul class="icon-foot">
                    <li>
                        <a href="javascript:;"><i class="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="javascript:;"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="javascript:;"><i class="fa-brands fa-pinterest-p"></i></a>
                    </li>
                    <li>
                        <a href="javascript:;"><i class="fa-brands fa-twitter"></i></a>
                    </li>
                </ul>
            </div>
            <div class="frame">
                <p class="nick">© 2023 <span>Oflix</span>. All Rights Reserved by <span>Chinh</span></p>
            </div>
        </div>
    </div>
    </div>`;
}
renderFoot();
// heade & footer--->

// responsive header--->

let mainBars = document.querySelector(".header .main-bars");
let overlay = document.querySelector(".header .overlay");

mainBars.addEventListener("click", function () {
    mainBars.classList.toggle("active");
    overlay.classList.add("active");
});

overlay.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        overlay.classList.remove("active");
        mainBars.classList.remove("active");
        subBarsChill.classList.remove("active");
    }
});

let subBarsChill = document.querySelector(".header .overlay .subBars-chill");
let genres = document.querySelector(".header .overlay .genres");
let iconBack = document.querySelector(".header .overlay .fa-arrow-left");

genres.addEventListener("click", function () {
    subBarsChill.classList.add("active");
});
iconBack.addEventListener("click", function () {
    subBarsChill.classList.remove("active");
});

// responsive header--->

// API--->

// key--->

const API_KEY = "e9e9d8da18ae29fc430845952232787c";

// fetch--->

async function getData(url) {
    let prommise = await fetch(url);
    let data = await prommise.json();
    return data;
}

// function render film--->

function renderFilm(data, frame) {
    data.results.forEach((element) => {
        frame.innerHTML += ` <a href="detail-film.html?id=${element.id}&type=${element.title ? "movie" : "tv"}" class="card-film">
        <img src="https://image.tmdb.org/t/p/w300${element.poster_path}
        " alt="img" />
        <div class="content-film">
            <p class="title-film">${element.title ? element.title : element.original_name}</p>
            <ul>
                <li class="year">${element.release_date ? element.release_date : element.first_air_date}</li>
                <li class="star">${element.vote_average} <i class="fa-solid fa-star"></i></li>
            </ul>
        </div>
    </a>`;
    });
}

// genres--->

async function renderGenre() {
    let subBars = document.querySelector(".menu .subBars-child");
    let dataGenre = await getData(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY} `);
    dataGenre.genres.forEach((element) => {
        subBars.innerHTML += `<a href="movies.html?type=${element.name}&id=${element.id}">${element.name}</a>`;
    });
}
renderGenre();

// search--->

let input = document.querySelector(".header .search input");
let iconSearch = document.querySelector(".header .search i");
iconSearch.addEventListener("click", function () {
    window.location.href = `movies.html?query=${input.value}`;
});
input.addEventListener("keydown", function (e) {
    if (e.keyCode == "13") {
        window.location.href = `movies.html?query=${input.value}`;
    }
});
