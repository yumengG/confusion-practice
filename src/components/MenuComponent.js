/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  Media, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import Dish from './Dish'
import RenderSelectedDish from './RenderSelectedDish'

const MenuComponent = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState()

  const selectSingleDish = (dish) => {
    setSelectedDish(dish)
    console.log(dish.id)
  }

  return (
        <div className='container'>
            <div className='row'>
              {dishes.map((dish) => (
                <Dish key={dish.id} dish={dish} selectSingleDish={selectSingleDish}/>
              ))}
            </div>

            <div className='row'>
              <div className='col-12 col-md-5 m-1'>
                {selectedDish ? <RenderSelectedDish dish={selectedDish }/> : <div />}
              </div>

            </div>
        </div>
  )
}
export default MenuComponent
