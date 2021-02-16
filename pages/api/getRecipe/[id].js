const isDev = process.env.NODE_ENV === 'development'
const doNotMock = process.env.DO_NOT_MOCK === 'true'

function getRecipe(req, res) {
  if (isDev && !doNotMock) {
    return fetch(`http://localhost:3001${req.url}`)
      .then((res) => res.json())
      .then((data) => res.json(data))
  }

  const baseUrl = `https://api.spoonacular.com`
  const apiKey = process.env.SPOONACULAR_API_KEY
  const id = req.query.id

  return fetch(
    `${baseUrl}/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      return res.json(data)
    })
}

module.exports = getRecipe
