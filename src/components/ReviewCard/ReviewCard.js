import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import './ReviewCard.css'

const ReviewCard = (props) => {
    const {img,reviewer_name,review_body,rating,date}=props.review;
    return (
        <div>
            <div className="review-part">
                <div className="card-body">
                    <img src={img} alt="" />
                    <div className='card-details'>
                        <h3>{reviewer_name}</h3>
                        <p className='ratings'>Rating: ({rating})</p>
                        <div className='icons'>
                            <div className="single-icon"><StarIcon></StarIcon></div>
                            <div className="single-icon"><StarIcon></StarIcon></div>
                            <div className="single-icon"><StarIcon></StarIcon></div>
                            <div className="single-icon"><StarIcon></StarIcon></div>
                            <div className="single-icon empty"><StarIcon></StarIcon></div>
                        </div>
                        <p className='review-details'>{review_body}</p>
                        <p className='date'>Date: {date}</p>
                    </div>
                </div>        
            </div>
        </div>
    );
};

export default ReviewCard;