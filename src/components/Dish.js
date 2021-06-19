/* eslint-disable react/prop-types */
import React from 'react'
import { Media } from 'reactstrap'

const Dish = ({ dish }) => {
  return (
        <div className='col-12 mt-5'>
           <Media tag='li'>
               <Media left >
                   <Media object src={dish.image} />
                </Media>
                <Media body className='ml-5'>
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                </Media>
            </Media>
        </div>
  )
}

export default Dish
