const $container = document.getElementById("root-meals")

const getData = async () => {
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    if (response.ok) {
      const data = await response.json()
      data.meals.forEach((meal) => {
        $container.innerHTML += `<h2>${meal.strMeal}</h2>`
      })
    }
  } catch (error) {
    alert(error.message)
  }
}

getData()