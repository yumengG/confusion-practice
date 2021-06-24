/* eslint-disable react/prop-types */
import React from 'react'
import EachComment from './EachComment'

const Comment = ({ dish }) => {
  return (
        <div>
            <h3>Comment</h3>
            <br/>
            {dish.comments.map((comment) => (
                <EachComment key={comment.id} comment={comment} />
            ))}
        </div>
  )
}

export default Comment
