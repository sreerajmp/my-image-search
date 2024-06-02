// src/components/HomePage.tsx
'use client';
import axios from 'axios';
import { useState } from 'react';
import { ApiResponse, Image } from '../types';
import SearchBar from './SearchBar';
import ImageGrid from './ImageGrid';
import Pagination from './Pagination';

interface HomePageProps {
  initialData: ApiResponse;
  initialQuery: string;
  initialPage: number;
}

const fetchImages = async (query: string, page: number) => {
  const response = await axios.get<ApiResponse>(`https://simple-pexels-proxy.onrender.com/search?query=${query}&per_page=8&page=${page}`);
  return response.data;
};

const HomePage: React.FC<HomePageProps> = ({ initialData, initialQuery, initialPage }) => {
  const [images, setImages] = useState<Image[]>(initialData.photos);
  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (newQuery: string) => {
    const data = await fetchImages(newQuery, 1);
    setImages(data.photos);
    setTotalPages(data.total_results);
    setQuery(newQuery);
    setPage(1);
  };

  const handlePageChange = async (newPage: number) => {
    const data = await fetchImages(query, newPage);
    setImages(data.photos);
    setPage(newPage);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} totalResult={totalPages} />
      <ImageGrid images={images} />
      <Pagination page={page} query={query} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
