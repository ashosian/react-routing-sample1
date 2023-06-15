import React from 'react'

const Detail = () => {
  const meal = {
    "idMeal": "52771",
    "strMeal": "Spicy Arrabiata Penne",
    "strCategory": "Vegetarian",
    "strArea": "Italian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strTags": "Pasta,Curry",
    "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
    "strIngredient1": "penne rigate",
    "strIngredient2": "olive oil",
    "strIngredient3": "garlic",
    "strIngredient4": "chopped tomatoes",
    "strIngredient5": "red chile flakes",
    "strIngredient6": "italian seasoning",
    "strIngredient7": "basil",
    "strIngredient8": "Parmigiano-Reggiano",
    "strMeasure1": "1 pound",
    "strMeasure2": "1/4 cup",
    "strMeasure3": "3 cloves",
    "strMeasure4": "1 tin ",
    "strMeasure5": "1/2 teaspoon",
    "strMeasure6": "1/2 teaspoon",
    "strMeasure7": "6 leaves",
    "strMeasure8": "spinkling",
  };

  let { strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8 } = meal

  let { strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8 } = meal;

  return (
    <div className="box grid grid-cols-4 bg-orange-500">
      <div className='box1 flex flex-col items-center h-[80vh] col-span-2'>
        <h1 className='text-2xl font-bold'>{meal.strMeal}</h1>
        <img className='shadow-lg h-[40vh] px-3 ' src={meal.strMealThumb} alt="" />
        <p className=' text-justify px-5'>{meal.strInstructions}</p>
      </div>

      <div className="box2  flex flex-col items-center">
        <h1 className='text-2xl font-extrabold p-10'>Ingredients</h1>
        <p>{strIngredient1}</p>
        <p>{strIngredient2}</p>
        <p>{strIngredient3}</p>
        <p>{strIngredient4}</p>
        <p>{strIngredient5}</p>
        <p>{strIngredient6}</p>
        <p>{strIngredient7}</p>
        <p>{strIngredient8}</p>
      </div>

      <div className="box3 flex flex-col items-start">
        <h1 className='text-2xl font-extrabold p-10'>Measure</h1>
        <p>{strMeasure1}</p>
        <p>{strMeasure2}</p>
        <p>{strMeasure3}</p>
        <p>{strMeasure4}</p>
        <p>{strMeasure5}</p>
        <p>{strMeasure6}</p>
        <p>{strMeasure7}</p>
        <p>{strMeasure8}</p>
      </div>
    </div>
  )
}

export default Detail
