import React, { useState } from 'react'
import Menu from './MenuComponent'
import Dish from './Dish'
import { Navbar, NavbarBrand } from 'reactstrap'
import { DISHES } from '../shared/Dishes'
import Comment from './Comment'
import RenderSelectedDish from './RenderSelectedDish'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

const MainComponent = () => {
  const [dishes, setDishes] = useState(DISHES)
  const [selectedDishes, setSelectedDish] = useState()

  const selectDish = (dish) => {
    console.log(dish.id)
    setSelectedDish(dish)
  }

  return (
        <div>
            <Header />
            <Menu dishes={dishes} selectDish={(dish) => selectDish(dish)}/>
            <div className='row'>
              <div className='col-12 col-md-5 m-1'>
                {selectedDishes ? <RenderSelectedDish dish={selectedDishes}/> : <div />}
              </div>
              <div className='col-12 col-md-5 m-1'>
                {selectedDishes ? <Comment dish={selectedDishes}/> : <div />}
              </div>
            </div>
            <Footer />
        </div>
  )
}

export default MainComponent
