/* eslint-disable react/prop-types */
import React from 'react'
import { Media, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'

const RenderSelectedDish = ({ dish }) => {
  return (
        <div>
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
            </Card>
        </div>
  )
}

export default RenderSelectedDish
