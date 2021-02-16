const isDev = process.env.NODE_ENV === 'development'
const doNotMock = process.env.DO_NOT_MOCK === 'true'

function getRandomRecipe(req, res) {
  if (isDev && !doNotMock) {
    return fetch(`http://localhost:3001${req.url}`)
      .then((res) => res.json())
      .then((data) => res.json(data))
  }

  const baseUrl = `https://api.spoonacular.com`
  const apiKey = process.env.SPOONACULAR_API_KEY

  return fetch(
    `${baseUrl}/recipes/random?tags=dinner&number=1&apiKey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      const id = data.recipes[0].id
      return res.json({
        id,
      })
    })
}

module.exports = getRandomRecipe
