const $container = document.getElementById("root");

const getData = async () => {
  try {
    const response = await fetch("http://universities.hipolabs.com/search?country=Argentina", { method: "GET" })

    if (response.ok) {
      const universities = await response.json()

      // for (let i = 0; i < universities.length; i = i + 5) {
      //   console.log(universities[i].name)
      // }

      universities.forEach((university) => {
        $container.innerHTML += `
        <div class="university">
          <h2>${university.name}</h2>
          <p>${!university["state-province"] ? 'No reconocido' : university["state-province"]} - ${university.alpha_two_code}</p>
          <a href="${university.web_pages[0]}" target="_blank">Visitar sitio</a>
        </div>
        `
      })
    }
  } catch (error) {
    console.log("Error al recibir la data")
  }
}

getData()