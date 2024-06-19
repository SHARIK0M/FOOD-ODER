import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Headder/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  
     const [category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category} setCategory={setCategory}/>
      <AppDownload/>
    </div>
  )
}

export default Home