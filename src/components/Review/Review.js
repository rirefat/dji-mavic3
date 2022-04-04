import React from 'react';
import './Review.css'

import { StarIcon } from '@heroicons/react/solid';

const Review = (props) => {
    const {img,reviewer_name,review_body,rating,date}=props.topReview;
    return (
        <div className='single-review-container'>            
            <img src={img} alt="" />
            <h2 className='reviewer-name'>{reviewer_name}</h2>                       
            <p className='ratings'>Rating: {rating}</p>
            <div className="star-icons">
                <div className="single-icon"><StarIcon></StarIcon></div>
                <div className="single-icon"><StarIcon></StarIcon></div>
                <div className="single-icon"><StarIcon></StarIcon></div>
                <div className="single-icon"><StarIcon></StarIcon></div>
                <div className="single-icon empty"><StarIcon></StarIcon></div>
            </div>
            <p className='review-body'>{review_body}</p>       
            <p className='date'>Date: {date}</p>
        </div>
    );
};

export default Review;