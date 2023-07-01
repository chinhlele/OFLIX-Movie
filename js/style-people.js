let page = 1;

async function showActor(page) {
    let listPeople = document.querySelector(".list-tv-shows .list");
    let dataPeople = await getData(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&page=${page}`);
    console.log(dataPeople);
    dataPeople.results.forEach((element) => {
        listPeople.innerHTML += `<a href="detail-actor.html?id=${element.id}" class="card-film">
        <img src="${element.profile_path ? `https://image.tmdb.org/t/p/w300${element.profile_path}` : "img/screen.jpg"}
        " alt="img" />
        <div class="content-film">
            <p class="title-film">${element.name}</p>
        </div>
    </a>`;
    });
}
showActor(page);

// show more--->

let showMore = document.querySelector(".show");

showMore.addEventListener("click", async function () {
    page++;
    await showActor(page);
});
