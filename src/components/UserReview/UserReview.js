import React from 'react';
import useReviews from '../../Utilities/CustomHok/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
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
                        <h1 className='ratings-box'>Ratings: 4.9/5.0</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;