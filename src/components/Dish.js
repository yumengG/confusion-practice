/* eslint-disable react/prop-types */
import React from 'react'
import { Media, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

const Dish = ({ dish, selectSingleDish }) => {
  return (
        <div className='col-12 col-md-5 m-1'>
            <Card className='menuCard' onClick={() => selectSingleDish(dish)} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>

            </Card>

        </div>
  )
}

export default Dish
