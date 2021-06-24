/* eslint-disable react/prop-types */
import React from 'react'
import { Row, Col } from 'reactstrap'

const EachComment = ({ comment }) => {
  return (
        <div className="comment">
            <div>{comment.comment}</div>
            <Row>
                <Col className='col-3'>
                <div>-- {comment.author}</div>
                </Col>
                <Col>
                <div>{comment.date.slice(0, 10)}</div>
                </Col>
            </Row>
            <br />
        </div>
  )
}

export default EachComment
