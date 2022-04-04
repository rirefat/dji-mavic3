import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-page'>
            <div className="title">
                <h1><span className='target-text'>Blog</span> Page</h1>
            </div>
            <div className="qna-container">
                <div className="single-qna">
                    <h3><span># Q1. </span>What is the purpose of Context API?</h3>
                    <p><strong>Ans:</strong> </p>
                </div>
                <div className="single-qna">
                    <h3><span># Q2. </span>What is the symantic tag?</h3>
                    <p><strong>Ans:</strong> </p>
                </div>
                <div className="single-qna">
                    <h3><span># Q3. </span>What are the differences between inline, block and inline-block elements?</h3>
                    <p><strong>Ans:</strong> </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;