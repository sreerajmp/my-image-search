import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faDownload, faImage, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

interface ImageCardProps {
  image: {
    id: number;
    alt: string;
    src: {
      original: string;
    };
    photographer: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const truncatedTitle = image.alt?.length > 40 ? image.alt.substring(0, 40) + '...' : image.alt;

  const handleDownload = (url: string, filename: string) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading image:', error));
  };
  

  return (
    <div className="image-card">
      <img src={image.src.original} alt={image.alt} />
      <div className="hover-overlay">
        <div className="caption">
          {truncatedTitle}
        </div>
        <div className="image-button">
          <button>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <button onClick={() => handleDownload(image.src.original, `${image.id}.jpeg`)}>
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <button>
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
          <button>
            <FontAwesomeIcon icon={faImage} />
          </button>
        </div>
        <div className="photographer">
          {image.photographer}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
