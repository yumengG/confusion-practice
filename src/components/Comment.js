/* eslint-disable react/prop-types */
import React from 'react'
import EachComment from './EachComment'

const Comment = ({ comment }) => {
  return (
        <div>
            <h3>Comment</h3>
            <br/>
            <EachComment key={comment.id} comment={comment} />
        </div>
  )
}

export default Comment
