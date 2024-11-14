"use client";

import React, { useEffect, useState } from 'react';
import { getPlanets } from '@/service/swapiService';
import Link from 'next/link';
import { Planet, PlanetData } from '@/types/planet';

const PlanetList = () => {
  const [planets, setPlanets] = useState<PlanetData>({
    count: 0,
    next: "",
    previous: "",
    results: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');

  const fetchPlanet = async (url?: string, searchQuery?: string) => {
    try {
      const data = await getPlanets(url || '', searchQuery);
      setPlanets(data);
    } catch (err) {
      setError(`Failed to fetch planet data. Error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    fetchPlanet('', search);
  };

  useEffect(() => {
    fetchPlanet();
  }, []);

  if (loading) return <p className='text-center text-2xl my-24'>Cargando lista de Planetas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto mt-12">
      <div className='max-w-7xl m-auto text-center'>
        <h1 className='text-xl md:text-4xl text-green-700 font-bold pt-12'>
          Lista de Planetas
        </h1>

        <form onSubmit={handleSearch} className="mb-3 mt-4 flex flex-start">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre"
            className="px-3 py-1 border rounded-l-lg text-md"
          />
          <button type="submit" className="px-3 py-1 border bg-green-700 text-white text-md rounded-r-lg">
            Buscar
          </button>
        </form>

        <div className="mt-3 mb-8 w-full mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Diametro</th>
                <th scope="col" className="px-6 py-3">Población</th>
                <th scope="col" className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {planets.results?.length > 0 ? (
                planets.results?.map((item: Planet) => (
                  <tr key={item.url} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.diameter} km</td>
                    <td className="px-6 py-4">{item.population}</td>
                    <td className="px-6 py-4">
                      <Link href={`/planet/${item.url.split('/').slice(-2)[0]}`} className='text-blue-700'> 
                        Ver detalles
                      </Link>
                    </td>
                  </tr>
                ))) : (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center">
                    No se encontraron resultados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={() => fetchPlanet(planets.previous)}
            disabled={!planets.previous}
            className={`mx-2 px-4 py-2 font-semibold text-white rounded-lg ${planets.previous ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Página Anterior
          </button>
          <button
            onClick={() => fetchPlanet(planets.next)}
            disabled={!planets.next}
            className={`mx-2 px-4 py-2 font-semibold text-white rounded-lg ${planets.next ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Página Siguiente
          </button>
        </div>

      </div>
    </div>
  );
};

export default PlanetList;