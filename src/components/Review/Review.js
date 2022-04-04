import React from 'react';
import './Review.css'

const Review = (props) => {
    const {img,reviewer_name,review_body,rating,date}=props.topReview;
    return (
        <div className='single-review-container'>            
            <img src={img} alt="" />
            <h2 className='reviewer-name'>{reviewer_name}</h2>                       
            <p className='ratings'>Rating: {rating}</p>
            <p className='review-body'>{review_body}</p>       
            <p className='date'>Date: {date}</p>
        </div>
    );
};

export default Review;