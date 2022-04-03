import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className='top-banner'>
            <div className="right-part">
                <h1 className='highlighted-text'>Introducing</h1>
                <h1 className='brand'>DJI Mavic 3</h1>
                <p>Capture stunning imagery with a legendary Hasselblad camera and enjoy smooth flight with omnidirectional obstacle sensing. Every improvement on Mavic 3 sets a higher standard for aerial photography. Fly with Mavic 3 and discover imaging above everything.</p>
                <button>Live Preview</button>
            </div>
        </div>
    );
};

export default TopBanner;