const $section = document.getElementById("films")

const fetchingFilms = async () => {
  const response = await fetch("https://ghibliapi.vercel.app/films")

  if (!response.ok) {
    alert("🚧 No se ha podido realizar la solicitud 🚧")
    return
  }

  const films = await response.json()
  console.log(films)

  films.forEach((film) => {
    $section.innerHTML += `<div>
      <img src='${film.movie_banner}'>
      <h2>${film.title}</h2>
      <h5>${film.original_title}</h5>
      <p>Año de estreno: ${film.release_date}</p>
      <p><b>Rating:</b></p>
      <meter id="combustible" min="0" max="100" low="30" high="80" optimum="90" value="${film.rt_score}">
        25%
      </meter>
    </div>`
  })
}

fetchingFilms()