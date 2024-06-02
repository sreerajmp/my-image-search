// src/components/ImageCard.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faDownload,faImage,faCirclePlus } from '@fortawesome/free-solid-svg-icons';

interface ImageCardProps {
  image: {
    id: string;
    url: string;
    title: string;
    photographer: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const truncatedTitle = image.alt?.length > 40 ? image.alt.substring(0, 40)+'...' : image.alt;

  return (
    <div className="image-card">
      <img src={image.src.original} alt={image.alt} />
      <div className="hover-overlay">
        <div className="caption" >
          {truncatedTitle}
        </div>
        <div className="image-button">
          <button>
          <FontAwesomeIcon icon={faShoppingCart} /></button>
          <button><FontAwesomeIcon icon={faDownload} /> </button>
          <button> <FontAwesomeIcon icon={faCirclePlus} /></button>
          <button><FontAwesomeIcon icon={faImage} /></button>
        </div>
        <div className="photographer">
          {image.photographer}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
