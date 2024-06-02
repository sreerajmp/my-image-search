export interface Image {
    id: number;
    src: {
      original: string;
    };
    alt: string;
    photographer: string;
  }
  
  export interface ApiResponse {
    photos: Image[];
    total_results: number;
  }
  