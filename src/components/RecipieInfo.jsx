import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

const RecipieInfo = () => {
  const {MealId} = useParams();
  const [item,setItem] = useState();
  const navigate = useNavigate()

  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
  .then(item=>item.json()
  .then(value=>
      setItem(value.meals[0]),
      )
  )

  let backPage=()=>{
    navigate(-1);
  }
  return (
    <>
    {
      (!item) ? "" : (<>
      <div className="content">
      <ImCross className='crossBtn' onClick={()=> backPage()}/>
      <img src={item.strMealThumb} alt="" />
      <div className="inner-content">
        <h1>{item.strMeal}</h1>
        <h2>{item.strArea} Food</h2>
        <h3>Category: {item.strCategory}</h3>
      </div>
      </div><br/><br/><br/>
      <div className="recipie-details">
        <div className="ingredients">
          <h2>Ingredients</h2><br/>
          <ul>
          <li><h4>{item.strIngredient1} : {item.strMeasure1}</h4></li>
          <li><h4>{item.strIngredient2} : {item.strMeasure2}</h4></li>
          <li><h4>{item.strIngredient3} : {item.strMeasure3}</h4></li>
          <li><h4>{item.strIngredient4} : {item.strMeasure4}</h4></li>
          <li><h4>{item.strIngredient5} : {item.strMeasure5}</h4></li>
          <li><h4>{item.strIngredient6} : {item.strMeasure6}</h4></li>
          <li><h4>{item.strIngredient7} : {item.strMeasure7}</h4></li>
          <li><h4>{item.strIngredient8} : {item.strMeasure8}</h4></li>
          </ul>
        </div>
        <div className="meal-instructions">
          <h2>Instructions</h2><br/>
          <h4>{item.strInstructions}</h4>
        </div>
      </div>
      </>)
    }
    </>
  )
}

export default RecipieInfo
