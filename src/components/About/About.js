import React from 'react';
import img from '../Images/dji-close-shot.jpeg'
import bottomImg from '../Images/dji-mavic.png'
import './About.css';

const About = () => {
    return (
        <div className='about-page'>
            <div className="title">
                <h1><span className='target-text'>About</span> Page</h1>
            </div>
            <div className="description">
                <div className="description-title">
                    <h1>DJI MAVIC 3</h1>
                    <p className='sub-title'>IMAGING ABOVE EVERYTHING</p>
                </div>
                <div className="top-section">
                    <div className="left">
                        <p>Mavic 3 is the most comprehensive improvement to the world’s most popular drone series in three years, boosting performance in every function to create new aerial possibilities for flight, photography, and fun.
                        <br /><br />
                        Mavic 3 is redesigned from tip to tail as worthy of the Mavic series’ reputation as the world’s best and most popular drones. From its 4/3 CMOS Hasselblad camera and 28x hybrid zoom camera, to its omnidirectional obstacle sensors with a maximum 200-meter range, [1] to its redesigned batteries that provide up to 46 minutes of flight time, Mavic 3 provides unprecedented flight performance and a peerless content creation experience. Its upgraded hardware and software can process 5.1K video at 50 frames per second in supple and nuanced color with heightened low-light sensitivity, and support 4K/120fps for higher-quality results for slow-motion footage. An enhanced Mavic 3 Cine edition offers Apple ProRes 422 HQ encoding for richer video processing, with an internal 1TB SSD onboard for high-speed data storage.</p>
                    </div>
                    <div className="right">
                        <img src={img} alt="DJI Mavic 3" />
                    </div>
                </div>
                <div className="bottom-section">
                    <p className='sub-title'>IMAGING ABOVE EVERYTHING WITH A DUAL-CAMERA SYSTEM</p>
                    <p className='explanations'>DJI pioneered the folding drone category in 2016 with the launch of the original Mavic Pro, which for the first time put professional-quality imaging in a body that could fit in a backpack. Two years later, Mavic 2 Pro launched DJI’s collaboration with iconic Swedish camera maker Hasselblad, integrating a one-inch sensor to push the boundaries of drone imagery further. With its new dual-camera Hasselblad system, Mavic 3 once again sets the new standard for imaging excellence.</p>

                    <p className='explanations'>DJI Mavic 3’s customized L2D-20c aerial camera embeds a professional-grade 4/3 CMOS sensor with a 24mm prime lens in a sleek and compact form. Rigorous Hasselblad standards for hardware performance and software algorithms allow it to shoot 20MP still images in 12-bit RAW format and videos in 5.1K at 50fps, 4K at 120fps.The higher video definition creates smoother footage and more generous cropping possibilities and allows for slow-motion video at 120fps.</p>

                    <p className='explanations'>The larger image sensor gives Mavic 3 higher video resolution and dynamic range and more effectively suppresses noise in low-light environments. A native dynamic range of 12.8 stops helps retain more details in highlights and shadows, preserving rich visual information with a greater sense of depth and elevating imagery to a professional level. An adjustable aperture of f/2.8-f/11 is available to meet the needs of aerial photographers in a wide variety of lighting scenarios to get sharper and clearer images.</p>

                    <p className='explanations'>Weighing just 12.5 grams, the 24mm equivalent autofocus prime lens has an 84° FOV to capture more details with sharp clarity. Mavic 3’s second camera features a 162mm tele lens with 28x Hybrid Zoom (digital + optical) and aperture of f/4.4 that can freely bring distant objects visually closer, offering the user more dynamic perspectives and creative possibilities at a distance. The new Vision Detection Auto Focus technology for quick focusing allows the Hasselblad camera to work with multiple vision sensors on board to capture distance data to optimize focusing speed.</p>

                    <p className='explanations'>Mavic 3 delivers a deeply accurate color palette straight out of its camera thanks to the unique Hasselblad Natural Colour Solution (HNCS), built on decades of photographic experience and introduced to DJI cameras with Mavic 2 Pro. With professional imaging performance, Mavic 3 records aerial videos at high resolutions and framerates and captures up to 1 billion colors thanks to the 10-bit D-Log color profile, offering natural color gradations and advanced flexibility in post-production.</p>                
                </div>
            </div>
            <div className="bottom-img"></div>
        </div>
    );
};

export default About;