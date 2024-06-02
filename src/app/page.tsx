'use server'
import axios from 'axios';
import { ApiResponse } from '../types';
import HomePage from '../components/HomePage';

const fetchImages = async (query: string, page: number) => {
  const response = await axios.get<ApiResponse>(`https://simple-pexels-proxy.onrender.com/search?query=${query==""?undefined:query}&per_page=8&page=${page}`);
  return response.data;
};

export default async function Home({ searchParams }: { searchParams: { query?: string; page?: string } }) {
  const query = searchParams.query || "";
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const initialData = await fetchImages(query, page);

  return (
    <HomePage
      initialData={initialData}
      initialQuery={query}
      initialPage={page}
    />
  );
}
