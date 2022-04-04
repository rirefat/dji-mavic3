import React from 'react';
import useReviews from '../../Utilities/CustomHok/useReviews';
import Review from '../Review/Review';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css'

const Home = () => {
    const [reviews, setReviews]=useReviews();

    const topReviews = reviews.slice(0,3);
    console.log(topReviews)
    // setReviews(topReviews);

    return (
        <div>
            <TopBanner></TopBanner>
            <div className="top-reviews">
                {
                    topReviews.map(topReview=><Review topReview={topReview} key={topReview.id}></Review>)
                }
            </div>
        </div>
    );
};

export default Home;