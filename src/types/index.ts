// src/types/index.ts
export interface Image {
    id: number;
    src: {
      medium: string;
    };
    alt: string;
    photographer: string;
  }
  
  export interface ApiResponse {
    photos: Image[];
    total_results: number;
  }
  