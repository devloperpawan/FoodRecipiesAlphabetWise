import Meal from './components/Meal'
import './components/style.css'
import { Route, Routes } from 'react-router-dom'
import RecipieInfo from './components/RecipieInfo'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Meal/>}></Route>
    <Route path='/:MealId' element={<RecipieInfo/>}></Route>
    </Routes>
    </>
  )
}

export default App
