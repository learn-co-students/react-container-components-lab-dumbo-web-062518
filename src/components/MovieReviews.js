// Code MovieReviews Here
import React, { Component } from 'react';


const MovieReviews = (props) => {

  return (
    <div className="review-list">
      {props.reviews.map((review, index) => {
        return (
          <div className="review" key={index}>
            <p>{review.display_title}</p>
            <p>{review.summary_short}</p>
          </div>
        );
      })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
