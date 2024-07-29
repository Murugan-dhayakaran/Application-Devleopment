import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import '../pages/css/LandingPage.css';
import p10 from '../pages/css/p10.webp';
import p6 from '../pages/css/p6.webp';
import p7 from '../pages/css/p7.png';
import p8 from '../pages/css/p8.jpeg';

const LandingPage = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      <div className="landing-container">
        <img src={p10} alt="Fashion Rental and Clothing Swapping" className="landing-header-image" />
        <h3 className='content'>Welcome to fashion rental and clothing swapping platform</h3>
        <div className="landing-content">
        </div>
        <div className="landing-cards-container">
          <div className="landing-card">
            <img src={p6} alt="Card 4" />
            <div className="landing-card-content">
              <h3>Card Title 4</h3>
              <p>This is a description for card 4. It gives an overview of the content.</p>
              <a href="#readmore4" className="landing-read-more-link">Read more</a>
            </div>
          </div>
          <div className="landing-card">
            <img src={p7} alt="Card 5" />
            <div className="landing-card-content">
              <h3>Card Title 5</h3>
              <p>This is a description for card 5. It gives an overview of the content.</p>
              <a href="#readmore5" className="landing-read-more-link">Read more</a>
            </div>
          </div>
          <div className="landing-card">
            <img src={p8} alt="Card 6" />
            <div className="landing-card-content">
              <h3>Card Title 6</h3>
              <p>This is a description for card 6. It gives an overview of the content.</p>
              <a href="#readmore6" className="landing-read-more-link">Read more</a>
            </div>
          </div>
          
        </div>
          <h2>About us</h2>
          <p>Welcome to Fashion rental and clothing swapping platform, your go-to destination for sustainable fashion. We believe in a world where style and sustainability go hand in hand. Our platform offers a unique blend of fashion rental and clothing swapping services, allowing you to refresh your wardrobe without the environmental impact of fast fashion. Whether you need a stunning outfit for a special occasion or want to exchange your gently used clothes for something new, we've got you covered</p>
          <p>At Fashion rental and clothing swapping platform, we strive to create a community of fashion-forward individuals who are passionate about making eco-friendly choices. Our extensive collection features high-quality pieces from top designers, ensuring that you can always find something that suits your taste and needs. By choosing our service, you’re not just accessing an endless closet—you’re also joining a movement towards a more sustainable future. Let's redefine fashion together!</p>
      </div>
    </div>
  );
};

export default LandingPage;
