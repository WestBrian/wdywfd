function getRandomRecipe(_, res) {
  const baseUrl = `https://api.spoonacular.com`
  const apiKey = process.env.SPOONACULAR_API_KEY

  fetch(`${baseUrl}/recipes/random?tags=dinner&number=1&apiKey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      const id = data.recipes[0].id
      res.redirect(`/recipe/${id}`)
    })
}

module.exports = getRandomRecipe
