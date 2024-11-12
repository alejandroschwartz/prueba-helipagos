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

  useEffect(() => {
    const fetchPlanet = async () => {
      const data = await getStarships();
      setStarships(data);
    };
    fetchPlanet();
  }, []);

  return (
    <div className="mx-auto mt-12">
      <div className='max-w-7xl m-auto text-center'>
        <h1 className='text-xl md:text-4xl text-green-700 font-bold pt-12'>
          Starship list
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
                      <Link href={item.url} className='text-blue-700'>
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
      </div>
    </div>
  );
};

export default StarshipList;