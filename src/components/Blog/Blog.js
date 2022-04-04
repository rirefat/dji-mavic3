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
                    <p><strong>Ans:</strong> The Context API is a React framework component structure that allows us to share particular types of data across all levels of the application. It is intended to address the issue of prop drilling. The Context API is helpful for exchanging data that is deemed global, such as the currently authorized user, the application's theme preferences, and so on. When we have this sort of data, we can utilize the Context API without having to use any other modules. In fact, we may use the Context API in any circumstance where we need to send a prop via a component such that it reaches another component further down the tree.</p>
                </div>
                <div className="single-qna">
                    <h3><span># Q2. </span>What is the semantic tag?</h3>
                    <p><strong>Ans:</strong> A semantic element's key characteristic is that it clearly conveys its meaning to both the developer and the browser. These aspects identify its content very clearly. Semantic HTML tags give information about their contents that extends beyond how they appear on a page. Text wrapped in a code element is immediately recognized by the browser as a coding language. Instead of attempting to render that code, the browser recognizes that you are using that text as an example of code for the purposes of an article or online tutorial. Semantic components, in general, result in more consistent code.</p>
                </div>
                <div className="single-qna">
                    <h3><span># Q3. </span>What are the differences between inline, block and inline-block elements?</h3>
                    <p><strong>Ans:</strong> Web browsers treat every element as though it were a box. CSS, on the other hand, distinguishes between two sorts of boxes: block and inline. A block element always begins on a new line and occupies the horizontal space on the web page to the left and right. Any block element can have margins and padding added to all four sides.
                    <br />
                    Inline elements, on the other hand, do not begin on a new line; instead, they display on the same line as the text and tags next to them. Browsers interpret inline components differently when it comes to margins and padding. We can add space to the left and right sides of an inline element, but we can't add height to the top or bottom padding or margin.
                    <br />
                    On the other hand inline-block elements, are identical to inline elements in that padding and margins may be placed on all four sides. In your CSS code, we'll need to define display: inline-block.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;