"use client";

import React, { useEffect, useState } from 'react';
import { getStarships } from '@/service/swapiService';
import Link from 'next/link';
import { Starship, StarshipData } from '@/types/starship';
import Pagination from '../Pagination';
import SearchInput from '../SearchInput';

const StarshipList = () => {
  const [data, setData] = useState<StarshipData>({
    count: 0,
    next: "",
    previous: "",
    results: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');

  const fetchData = async (url?: string, searchQuery?: string) => {
    try {
      const getData = await getStarships(url || '', searchQuery);
      setData(getData);
    } catch (err) {
      setError(`Failed to fetch starship data. Error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    fetchData('', search);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p className='text-center text-2xl my-24'>Cargando lista de Naves...</p>;
  if (error) return <p>{error}</p>;

  return (
      <>
        <SearchInput search={search} setSearch={setSearch} handleSearch={handleSearch} />
        <div className="mt-3 mb-8 w-full mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Fabricante</th>
                <th scope="col" className="px-6 py-3">Largo</th>
                <th scope="col" className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.results?.length > 0 ? (
                data.results?.map((item: Starship) => (
                  <tr key={item.url} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.manufacturer}</td>
                    <td className="px-6 py-4">{item.length} m</td>
                    <td className="px-6 py-4">
                      <Link href={`/starship/${item.url.split('/').slice(-2)[0]}`} className='text-blue-700'> 
                        Ver detalles
                      </Link>
                    </td>
                  </tr>
                ))) : (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center">
                    No se encontraron resultados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination data={data} fetchData={fetchData} />
      </>
  );
};

export default StarshipList;