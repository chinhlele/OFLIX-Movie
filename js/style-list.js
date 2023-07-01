const url = new URL(window.location.href);
const type = url.searchParams.get("type");
const GENRE_ID = url.searchParams.get("id");
const query = url.searchParams.get("query");
console.log(GENRE_ID);
let page = 1;

// xuất film ra các trang movie và TV Shows và Genres

let title = document.querySelector(".banner-02 h3");
if (!GENRE_ID) {
    title.innerHTML = type == "tv" ? "TV Shows" : "Movies";
} else {
    title.innerHTML = type;
}

async function showList(page) {
    let listMovie = document.querySelector(".list-tv-shows .list");
    if (query) {
        let dataSearch = await getData(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
        title.innerHTML = "Search";
        renderFilm(dataSearch, listMovie);
    } else {
        if (!GENRE_ID) {
            let dataMovie = await getData(`https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&page=${page}`);
            renderFilm(dataMovie, listMovie);
        } else {
            let dataGenre = await getData(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${GENRE_ID}&page=${page}
            `);
            renderFilm(dataGenre, listMovie);
        }
    }
}
showList(page);

// show more--->

let showMore = document.querySelector(".show");

showMore.addEventListener("click", async function () {
    page++;
    await showList(page);
});
