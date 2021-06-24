/* eslint-disable react/prop-types */
import React from 'react'
import { Row, Col, Media, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'

const RenderSelectedDish = ({ dish }) => {
  return (
        <div>
            <Row>
                <Col>
                    <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
  )
}

export default RenderSelectedDish
