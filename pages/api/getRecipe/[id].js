function getRecipe(req, res) {
  const baseUrl = `https://api.spoonacular.com`
  const apiKey = process.env.SPOONACULAR_API_KEY
  const id = req.query.id

  fetch(
    `${baseUrl}/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      res.json(data)
    })
}

module.exports = getRecipe
