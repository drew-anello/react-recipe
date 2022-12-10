import { useEffect, useState } from 'react'

function Popular () {
  // popular action as var and setPopular is acting as function to modify
  const [popular, setPopular] = useState([])
  //   tells react it needs to do something after render.
  useEffect(() => {
    getPopular()
  }, [])
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    )
    const data = await api.json()
    setPopular(data.recipes)
  }
  return (
    <div>
      {popular.map(recipe => {
        return (
          <div>
            <p>{recipe.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Popular
