let detailFilm = document.querySelector(".frame-detail");
let trailerFilm = document.querySelector(".trailer-film iframe");
let trailer = document.querySelector(".trailer-film");
let imgDetailFilm = document.querySelector(".detail-film .left-film img");
let playTrailer = document.querySelector(".play-film");
let popup = document.querySelector(".popup-trailer");
let recommend = document.querySelector(".recommend");
const url = new URL(window.location.href);
const id = url.searchParams.get("id");
const type = url.searchParams.get("type");
console.log(id);

// popup-trailer--->

playTrailer.addEventListener("click", async function () {
    popup.classList.add("active");
    let video = await renderTrailer();
    console.log(video);
    trailer.innerHTML = `<iframe
    src="https://www.youtube.com/embed/${video.key}?autoplay=1" allow="autoplay" "
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>`;
});

popup.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        popup.classList.remove("active");
        trailer.innerHTML = "";
    }
});

// show detail--->

async function showDetail() {
    let dataFilm = await getData(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`);
    console.log(dataFilm);
    imgDetailFilm.src = `https://image.tmdb.org/t/p/w300${dataFilm.poster_path}`;
    // detail.style.backgroundImage = `url(https://image.tmdb.org/t/p/w300${dataFilm.poster_path})`;
    detailFilm.innerHTML = `
        <h3>${dataFilm.original_title ? dataFilm.original_title : dataFilm.original_name}</h3>
        <ul>
            <li><span>${dataFilm.vote_average.toFixed(2)}%</span> User core</li>
            <li><i class="fa-regular fa-calendar"></i> ${dataFilm.release_date ? dataFilm.release_date : dataFilm.first_air_date}</li>
            <li><i class="fa-regular fa-clock"></i> <span>${dataFilm.runtime ? dataFilm.runtime : dataFilm.number_of_episodes}</span> Min</li>
        </ul>
        <p class="slogan">It's how you wear the mask that matters</p>
        <div class="genre">
            <p class="title-genre">Genre :</p>
            <p class="text-genre">${dataFilm.genres.map((item) => " " + item.name)}</p>
        </div>
        <div class="overview">
            <p class="title-over">Overview :</p>
            <p class="text-over">${dataFilm.overview}</p>
        </div>`;
}
showDetail();

// show actor--->

async function showActor() {
    let listCast = document.querySelector(".right-film .list-cast");
    let dataActor = await getData(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`);
    dataActor.cast.forEach((element) => {
        listCast.innerHTML += `<a href="detail-actor.html?id=${element.id}" class="actor"
        ><img src=${element.profile_path ? `https://image.tmdb.org/t/p/w300${element.profile_path}` : "img/avatar.png"} alt="img" />
        <p class="name-cast">${element.character}</p>
        <p>Jeff Morales (voice)</p>
    </a>`;
    });
}
showActor();

// show review--->

async function showReview() {
    let reviewer = document.querySelector(".list-review");
    let dataReview = await getData(`https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${API_KEY}`);
    console.log(dataReview);
    if (type == "tv") {
        recommend.style.display = "none";
        playTrailer.style.display = "none";
    }
    dataReview.results.forEach((element) => {
        reviewer.innerHTML += `<div class="frame">
        <img src=${
            element.author_details.avatar_path ? `https://image.tmdb.org/t/p/w300${element.author_details.avatar_path}` : "img/avatar.png"
        } alt="img" />
        <div class="content">
            <p class="name-content">${element.author}</p>
            <p class="text-content">
                ${element.content}
            </p>
            <p class="show-text" onclick="showMoreReview(event)">Show more</p>
        </div>
    </div>`;
    });
}

showReview();

// show more review--->

function showMoreReview(event) {
    let parent = event.target.parentElement;
    parent.querySelector(".text-content").classList.toggle("active");
    event.target.innerHTML = event.target.innerHTML == "Show more" ? "hide" : "Show more";
}

// render trailer--->

async function renderTrailer() {
    const API_TRAILER = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
    let dataTrailer = await getData(API_TRAILER);
    let findTrailer = dataTrailer.results.find((element) => element.type === "Trailer");
    return findTrailer;
}
