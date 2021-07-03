/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  Media, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import Dish from './Dish'
const MenuComponent = ({ dishes, selectDish }) => {
  const [selectedDish, setSelectedDish] = useState()

  return (
        <div className='container'>
            <div className='row'>
              {dishes.map((dish) => (
                <Dish key={dish.id} dish={dish} selectSingleDish={selectDish}/>
              ))}
            </div>
        </div>
  )
}
export default MenuComponent
