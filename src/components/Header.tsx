// src/components/Header.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>My Image Search</h1>
        </div>
        
        <div className="header-buttons">
          <button className="lightbox-button">
          <FontAwesomeIcon icon={faHeart} /> 
          {" "}Lightboxes</button>
          <button className="cart-button">
          <FontAwesomeIcon icon={faShoppingCart} /> 
            {" "}Cart</button>
          <button className="sign-in-button">Sign in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
