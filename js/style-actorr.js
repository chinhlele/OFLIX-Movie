let url = new URL(window.location.href);
let idActor = url.searchParams.get("id");
let imgActor = document.querySelector(".left-actor img");
let showTitle = document.querySelector(".detail-actor .right-actor .biography .text-biography");

// show title actor--->

function showTit(event) {
    event.target.previousElementSibling.classList.toggle("active");
    event.target.innerHTML = event.target.innerHTML == "Show more" ? "hide" : "Show more";
}

async function showDetailActor() {
    let rightActor = document.querySelector(".right-actor");
    let dataActor = await getData(`https://api.themoviedb.org/3/person/${idActor}?api_key=${API_KEY} `);
    console.log(dataActor);
    imgActor.src = `https://image.tmdb.org/t/p/w300${dataActor.profile_path}`;
    rightActor.innerHTML = ` <h3>${dataActor.name}</h3>
    <div class="info-actor">
        <div class="info">
            <div class="sub-info">
                <p class="info-title">Know for :</p>
                <p class="text">${dataActor.name}</p>
            </div>
            <div class="sub-info">
                <p class="info-title">Popularity :</p>
                <p class="text">${dataActor.popularity}</p>
            </div>
        </div>
        <div class="info">
            <div class="sub-info">
                <p class="info-title">Birthday :</p>
                <p class="text">${dataActor.birthday}</p>
            </div>
            <div class="sub-info">
                <p class="info-title">Place of Birth :</p>
                <p class="text">${dataActor.place_of_birth}</p>
            </div>
        </div>
    </div>
    <div class="also-know">
        <p class="info-title">Also Know As :</p>
        <p class="text-also">
        ${dataActor.also_known_as}
        </p>
    </div>
    <div class="biography">
        <p class="title-biography info-title">Biography :</p>
        <p class="text-biography">
        ${dataActor.biography}
        </p>
        <button class="showTitle" onclick="showTit(event)">Show more</button>
    </div>
</div>`;
}
showDetailActor();

async function filmActor() {
    let actorMovie = document.querySelector(".actor-in-the-movie");
    let dataFilmActor = await getData(`https://api.themoviedb.org/3/person/${idActor}/movie_credits?api_key=${API_KEY}`);
    dataFilmActor.cast.forEach((element) => {
        actorMovie.innerHTML += `<a href="detail-film.html?id=${element.id}" class="card-film">
        <img src="${element.poster_path ? `https://image.tmdb.org/t/p/w300${element.poster_path}` : "img/screen.jpg"}" alt="img" />
        <div class="content-film">
            <p class="title-film">${element.title ? element.title : element.original_name}</p>
            <ul>
                <li class="year">${element.release_date}</li>
                <li class="star">${element.vote_average} <i class="fa-solid fa-star"></i></li>
            </ul>
        </div>
    </a>`;
    });
}
filmActor();
