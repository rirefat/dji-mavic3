import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Utilities/CustomHok/useReviews';
import Review from '../Review/Review';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css'

const Home = () => {
    const [reviews, setReviews]=useReviews();

    const topReviews = reviews.slice(0,3);
    // console.log(topReviews)

    const navigate =useNavigate();
    const loadMore=()=>{        
        navigate('/reviews');
    }

    return (
        <div>
            <TopBanner></TopBanner>
            <div className="review-section">
                <h1>Our <span className='target-text'>Customers</span> Say</h1>
                <div className="top-reviews">
                    {
                        topReviews.map(topReview=><Review topReview={topReview} key={topReview.id}></Review>)
                    }
                </div>
                <div className="btn-area">
                    <button className='load-more-btn' onClick={loadMore}>Load More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;