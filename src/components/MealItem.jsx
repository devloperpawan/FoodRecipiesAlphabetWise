import React from 'react'
import {useNavigate} from 'react-router-dom'
const MealItem = ({data}) => {
    let name = 0;
    let Navigate = useNavigate();
  return (
    <>
    {
    (!data)?"Not Found":data.map(item=>{
        return(
            <div className='card' key={item.idMeal} onClick={()=>{Navigate(`/${item.idMeal}`)}}>
      <img src={item.strMealThumb} alt="mealThubmnail" />
      <h3>{item.strMeal} </h3> 
    </div>
        )
    })
    }
    </>
  )
}

export default MealItem
