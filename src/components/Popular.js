import { useEffect, useState } from 'react'
import styled from 'styled-components'

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
    // this will have data populate on page.
    <div>
      {popular.map(recipe => {
        return (
          <Wrapper>
            <h3>Popular Picks</h3>
            {popular.map(recipe => {
              return (
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              )
            })}
          </Wrapper>
        )
      })}
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
`

export default Popular
