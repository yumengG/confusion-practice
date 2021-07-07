/* eslint-disable react/prop-types */
import React from 'react'
import { Media, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'
import { Link } from 'react-router-dom'

const Dish = ({ dish, selectSingleDish }) => {
  return (
        <div className='col-12 col-md-5 m-1'>
            <Card className='menuCard' onClick={() => selectSingleDish(dish)} >
              <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
              </Link>
                

            </Card>

        </div>
  )
}

export default Dish
