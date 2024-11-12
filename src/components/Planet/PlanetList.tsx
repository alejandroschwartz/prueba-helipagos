"use client";

import React, { useEffect, useState } from 'react';
import { getPlanets } from '@/service/swapiService';
import Link from 'next/link';

export interface PersonData {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

const PlanetList = () => {
  const [planets, setPlanets] = useState<PersonData>({
    count: 0,
    next: "",
    previous: "",
    results: []
  });

  useEffect(() => {
    const fetchPlanet = async () => {
      const data = await getPlanets();
      setPlanets(data);
    };
    fetchPlanet();
  }, []);

  return (
    <div className="mx-auto mt-12">
      <div className='max-w-7xl m-auto text-center'>
        <h1 className='text-xl md:text-4xl text-green-700 font-bold pt-12'>
          Planet list
        </h1>
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
                planets.results?.map((person: Result) => (
                  <tr key={person.url} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{person.name}</td>
                    <td className="px-6 py-4">{person.diameter} km</td>
                    <td className="px-6 py-4">{person.population}</td>
                    <td className="px-6 py-4">
                      <Link href={person.url} className='text-blue-700'>
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
      </div>
    </div>
  );
};

export default PlanetList;