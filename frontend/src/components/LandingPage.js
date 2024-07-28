import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import '../pages/css/LandingPage.css';
import p10 from '../pages/css/p10.webp';
// import p2 from '../pages/css/p3.webp';
// import p1 from '../pages/css/p2.webp';
// import p5 from '../pages/css/p5.jpg';
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
        {/* <h2 className="landing-title">Welcome to Fashion Rental and Clothing Swapping</h2> */}
        {/* {user && <p className="landing-user">Hello, {user.username}</p>} */}
        <h3 className='content'>Welcome to fashion rental and clothing swapping platform</h3>
        <div className="landing-content">
          {/* <h3 className="landing-subtitle">How It Works</h3> */}
          {/* <p>
            Our platform allows you to rent or swap clothing items with others. Browse through available items, make a selection, and enjoy wearing something new without the need to buy. When you're done, simply return or swap the item.
          </p> */}
          {/* <h3 className="landing-subtitle">Benefits</h3>
          <ul className="landing-list">
            <li>Save money by renting instead of buying</li>
            <li>Access to a wide variety of fashion items</li>
            <li>Reduce waste by swapping clothes you no longer need</li>
          </ul> */}
          {/* <h3 className="landing-subtitle">Sustainability Education</h3>
          <p>
            Sustainability is about meeting our own needs without compromising the ability of future generations to meet their needs. In the context of fashion, it involves making choices that are environmentally friendly and socially responsible.
          </p>
          <h4 className="landing-subheading">Why Sustainability Matters</h4>
          <p>
            The fashion industry is one of the largest polluters in the world. By choosing to rent or swap clothing, you are helping to reduce the demand for new clothing production, which in turn reduces carbon emissions, water usage, and waste.
          </p>
          <h4 className="landing-subheading">How You Can Make a Difference</h4>
          <ul className="landing-list">
            <li>Choose to rent or swap instead of buying new items</li>
            <li>Support brands that prioritize sustainability</li>
            <li>Take care of your clothes to extend their life</li>
            <li>Educate others about the importance of sustainable fashion</li>
          </ul>
          <h4 className="landing-subheading">Learn More</h4>
          <p>
            For more information on sustainability and how you can contribute, visit our <a href="/sustainability">Sustainability Page</a>.
          </p> */}
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
      </div>
    </div>
  );
};

export default LandingPage;
