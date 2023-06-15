import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const food = {
    "idMeal": "52771",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strMeal": "Spicy Arrabiata Penne",
    "strCategory": "Vegetarian",
    "strArea": "Italian",
  }

  const nav = useNavigate();
  return (
    <div className="container h-[80vh] bg-red-400 flex items-center flex-col">
      <h1>Food Categories</h1>
      <div onClick={() => nav(`/Detail/${food.id}`)} className="card1">
        <img className='h-60 rounded-lg' src={food.strMealThumb} alt="" />
        <h1>{food.strMeal}</h1>
      </div>
    </div>
  )
}

export default Home
