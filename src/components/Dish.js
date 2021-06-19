/* eslint-disable react/prop-types */
import React from 'react'
import { Media, Col, Row } from 'reactstrap'

const Dish = ({ dish }) => {
  return (
        <div className='col-12 mt-5'>
           <Media>
                <Row>
                    <Col md='3'>
                <Media left>
                    <Media object src={dish.image} />
                    </Media>
                </Col>
                <Col md='7'>
                <Media body className='ml-5'>
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Col>
                </Row>
            </Media>
        </div>
  )
}

export default Dish
