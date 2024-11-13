"use client";

import React, { useEffect, useState } from 'react';
import { getStarships } from '@/service/swapiService';
import Link from 'next/link';

export interface PersonData {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

const StarshipList = () => {
  const [starships, setStarships] = useState<PersonData>({
    count: 0,
    next: "",
    previous: "",
    results: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStarship = async (url?: string) => {
    try {
      const data = await getStarships(url || '');
      setStarships(data);
    } catch (err) {
      setError('Failed to fetch starship data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStarship();
  }, []);

  if (loading) return <p className='text-center text-2xl mt-24'>Cargando lista de Naves...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto mt-12">
      <div className='max-w-7xl m-auto text-center'>
        <h1 className='text-xl md:text-4xl text-green-700 font-bold pt-12'>
          Lista de Naves
        </h1>
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
              {starships.results?.length > 0 ? (
                starships.results?.map((item: Result) => (
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

        <div className="flex justify-center items-center">
          <button
            onClick={() => fetchStarship(starships.previous)}
            disabled={!starships.previous}
            className={`mx-2 px-4 py-2 font-semibold text-white rounded-lg ${starships.previous ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Página Anterior
          </button>
          <button
            onClick={() => fetchStarship(starships.next)}
            disabled={!starships.next}
            className={`mx-2 px-4 py-2 font-semibold text-white rounded-lg ${starships.next ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Página Siguiente
          </button>
        </div>

      </div>
    </div>
  );
};

export default StarshipList;