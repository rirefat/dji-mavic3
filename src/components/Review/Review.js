import React from 'react';
import './Review.css'

const Review = (props) => {
    const {img,reviewer_name,review_body,rating,date}=props.topReview;
    return (
        <div className='single-review-container'>            
            <img src={img} alt="" />
            <h2>{reviewer_name}</h2>                       
            <p>Rating: {rating}</p>
            <p>{review_body}</p>       
            <p>Date: {date}</p>
        </div>
    );
};

export default Review;