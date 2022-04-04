import React from 'react';
import useReviews from '../../Utilities/CustomHok/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import { SparklesIcon, StarIcon } from '@heroicons/react/solid';
import './UserReview.css'

const UserReview = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='user-review-page'>
            <div className="title">
                <h1>Our <span className='target-text'>Respected</span> client's Opinion</h1>
            </div>
            <div className="review-container">
                <div>
                    {
                        reviews.map(review=><ReviewCard review={review} key={review.id}></ReviewCard>)
                    }
                </div>
                <div className="ratings-container">
                    <div>
                        <div className="top-section">
                            <div className='top-icon'><SparklesIcon></SparklesIcon></div>
                        </div>
                        <h1 className='ratings'>Ratings : <span className='final-rating'>4.85</span>/5.0</h1>
                        <div className="star-icons">
                            <div className="single-icon"><StarIcon></StarIcon></div>
                            <div className="single-icon"><StarIcon></StarIcon></div>
                            <div className="single-icon"><StarIcon></StarIcon></div>
                            <div className="single-icon"><StarIcon></StarIcon></div>
                            <div className="single-icon empty"><StarIcon></StarIcon></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;