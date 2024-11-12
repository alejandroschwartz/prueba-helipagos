"use client";

import React, { useEffect, useState } from 'react';
import { getPeople } from '@/service/swapiService';
import Link from 'next/link';

export interface PersonData {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

const PersonList = () => {
  const [person, setPerson] = useState<PersonData>({
    count: 0,
    next: "",
    previous: "",
    results: []
  });

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getPeople();
      setPerson(data);
    };
    fetchPeople();
  }, []);

  return (
    <div className="mx-auto mt-12">
      <div className='max-w-7xl m-auto text-center'>
        <h1 className='text-xl md:text-4xl text-green-700 font-bold pt-12'>
          Person list
        </h1>
        <div className="mt-3 mb-8 w-full mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Altura</th>
                <th scope="col" className="px-6 py-3">Peso</th>
                <th scope="col" className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {person.results?.length > 0 ? (
                person.results?.map((person: Result) => (
                  <tr key={person.url} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{person.name}</td>
                    <td className="px-6 py-4">{person.height}</td>
                    <td className="px-6 py-4">{person.mass} kg</td>
                    <td className="px-6 py-4">
                      <Link href={person.url} className='text-blue-700'>
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

export default PersonList;