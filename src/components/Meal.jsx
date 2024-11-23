
import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import IndxContainer from './IndxContainer'

const Meal = () => {
    const [url,setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    const [item,setItem] = useState()
    const [show,setShow] = useState(false)
    const [search,setSearch] = useState("")

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setItem(data.meals)
            setShow(true)
        })
    },[url])

    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchValue=(event)=>{
        if(event.key == "Enter")
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }

  return (
      <div className="main">
        <div className="heading">
            <h1>Search Your Food Recipe</h1>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis velit voluptates quia impedit blanditiis.</h4>
        </div>
        <div className="searchBox">
            <input type="search" className="search-bar" onChange={(e)=>{setSearch(e.target.value)}} onKeyPress={searchValue}/>
        </div>
        <div className="container">
            {
                show ? <MealItem data={item}/>:"Not Found."
            }
           
        </div>
        <div className="indexContainer">
            <IndxContainer showIndex = {(alpha)=> setIndex(alpha)}/>
        </div>
      </div>

  )
}

export default Meal
