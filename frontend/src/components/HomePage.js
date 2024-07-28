import React from 'react';
import Navbar from './Navbar';
import '../pages/css/HomePage.css';
import image from '../pages/css/p1.jpg';
import p31 from '../pages/css/p31.jpg';
import p1 from '../pages/css/p2.webp';
import p5 from '../pages/css/p5.jpg';
import p6 from '../pages/css/p6.webp';
import p7 from '../pages/css/p7.png';
import p8 from '../pages/css/p8.jpeg';
// import Sidebar from './Dashboard';
const HomePage = () => {
  return (
    <div>
      {/* <Sidebar></Sidebar> */}
      <Navbar />
      <div className="home-container">
        <img
          src={image}
          alt="Main banner"
          className="main-banner"
        />
        <h2 className="cards-heading">Featured Collections</h2>
        <div className="cards-container">
          <div className="card-row">
            <div className="card">
              <img src={p31} alt="Card 1" />
              <div className="card-content">
                <h3>Formals</h3>
                <p>Formals offer elegance and professionalism, perfect for business meetings, formal events.</p>
                <a href="#readmore1" className="read-more-link">Read more</a>
              </div>
            </div>
            <div className="card">
              <img src={p1} alt="Card 2" />
              <div className="card-content">
                <h3>Shirts</h3>
                <p>
                Shirts are versatile garments, available in various styles, fabrics, and colors, perfect for casual.</p>
                <a href="#readmore2" className="read-more-link">Read more</a>
              </div>
            </div>
            <div className="card">
              <img src={p5} alt="Card 3" />
              <div className="card-content">
                <h3>Coats</h3>
                <p>Renting coats provides affordable access to various styles, ensuring warmth and elegance.</p>
                <a href="#readmore3" className="read-more-link">Read more</a>
              </div>
            </div>
          </div>
          <div className="card-row">
            <div className="card">
              <img src={p6} alt="Card 4" />
              <div className="card-content">
                <h3>Frocks</h3>
                <p>
                A frock is a stylish,comfortable garment, perfect for various occasions, elegance with everyday wear</p>
                <a href="#readmore4" className="read-more-link">Read more</a>
              </div>
            </div>
            <div className="card">
              <img src={p7} alt="Card 5" />
              <div className="card-content">
                <h3>Wedding dress</h3>
                <p>
                Renting a wedding dress saves money while offering access to stunning, high-end designs.</p>
                <a href="#readmore5" className="read-more-link">Read more</a>
              </div>
            </div>
            <div className="card">
              <img src={p8} alt="Card 6" />
              <div className="card-content">
                <h3>Accessories and dress</h3>
                <p>Versatile accessories enhance any dress, adding style and flair effortlessly.</p>
                <a href="#readmore6" className="read-more-link">Read more</a>
              </div>
            </div>
          </div>
          <div className="card-row">
            {/* <div className="card">
              <img src="https://via.placeholder.com/300?text=Card+Image+7" alt="Card 7" />
              <div className="card-content">
                <h3>Card Title 7</h3>
                <p>This is a description for card 7. It gives an overview of the content.</p>
                <a href="#readmore7" className="read-more-link">Read more</a>
              </div>
            </div> */}
            {/* <div className="card">
              <img src="https://via.placeholder.com/300?text=Card+Image+8" alt="Card 8" />
              <div className="card-content">
                <h3>Card Title 8</h3>
                <p>This is a description for card 8. It gives an overview of the content.</p>
                <a href="#readmore8" className="read-more-link">Read more</a>
              </div>
            </div> */}
            {/* <div className="card">
              <img src="https://via.placeholder.com/300?text=Card+Image+9" alt="Card 9" />
              <div className="card-content">
                <h3>Card Title 9</h3>
                <p>This is a description for card 9. It gives an overview of the content.</p>
                <a href="#readmore9" className="read-more-link">Read more</a>
              </div>
            </div> */}
          </div>
        </div>
        <div className="info-section">
          <div className="info-column">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#shipping">Shipping</a></li>
            </ul>
          </div>
          <div className="info-column">
            <h4>Company Info</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>
          <div className="info-column">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#facebook"><img src="https://cdn-icons-png.freepik.com/256/15466/15466130.png?semt=ais_hybrid" alt="Facebook" /></a>
              <a href="#twitter"><img src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg" alt="Twitter" /></a>
              <a href="#instagram"><img src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <footer>
          <p>Contact us at: <a href="mailto:support@fashionrental.com">support@fashionrental.com</a></p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;