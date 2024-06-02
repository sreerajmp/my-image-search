// src/components/ImageGrid.tsx
import React from 'react';
import { Image } from '../types';
import ImageCard from './ImageCard';

interface ImageGridProps {
  images: Image[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div>
   
    <div className="image-grid">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
    </div>
  );
};

export default ImageGrid;
