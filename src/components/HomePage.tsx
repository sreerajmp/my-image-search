'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ApiResponse, Image } from '../types';
import SearchBar from './SearchBar';
import ImageGrid from './ImageGrid';
import Pagination from './Pagination';

interface HomePageProps {
  initialData: ApiResponse;
  initialQuery: string;
  initialPage: number;
}

const HomePage: React.FC<HomePageProps> = ({ initialData, initialQuery, initialPage }) => {
  const [images, setImages] = useState<Image[]>(initialData.photos);
  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(initialData.total_results);
  const router = useRouter();
  useEffect(() => {
    router.push(`/?query=${query}&page=1`);
  },[query])

  useEffect(() => {    
    router.push(`/?query=${query}&page=${page}`);
  },[page])

  const handleSearch = async (newQuery: string) => {
    setQuery(newQuery)
  };

  useEffect(() => {
    setImages(initialData.photos)
    setQuery(initialQuery)
    setPage(initialPage)
    setTotalPages(initialData.total_results)
  },[initialData,initialPage,initialQuery])

  const handlePageChange = async (newPage: number) => {    
    setPage(newPage)
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} totalResult={totalPages} />
      {query==""? <h1 style={{textAlign:"center"}}>Please enter a search query</h1> : 
      <div>
      <ImageGrid images={images} />
      <Pagination page={page} query={query} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>

      }
    </div>
  );
};

export default HomePage;
