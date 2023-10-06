const elMovie = document.querySelector("#movies")
const elInput = document.querySelector("#input")
const elButton = document.querySelector("#button")
const elLoading = document.querySelector("#loading")

const showLoading = () => {
    elLoading.style.display = "block"
}

const hiddenLoading = () => {
    elLoading.style.display = "none"
}

let apiKey = "e4312694"

function fetchMovies(searchQuery){
    elMovie.innerHTML = ""

    const apiUrl = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;
    showLoading()

    fetch(apiUrl)
    .then((respone) => respone.json())
    .then((data) => {
        console.log(data)

        hiddenLoading()

        if (data.Search){
            const movie = data.Search
            
            movie.forEach((value) => {
                const card = document.createElement("div")
                const image = document.createElement("img")
                const title = document.createElement("h1")
                const subTitle = document.createElement("p")

                image.src = value.Poster;
                title.innerHTML = value.Title;
                subTitle.innerHTML = value.Year;
             
                card.append(image)
                card.append(title)
                card.append(subTitle)
                elMovie.append(card)
            })
        }
    });
}


elButton.addEventListener("click", () => {
    let value = elInput.value.trim()

    if (search !==""){
        fetchMovies(search)
    }
})

elInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        let value = elInput.value.trim()

        if (value !==""){
            fetchMovies(value)
        }
    }
})

function showFilm(){
    const film = "spider man"
    fetchMovies(film)
}
showFilm()