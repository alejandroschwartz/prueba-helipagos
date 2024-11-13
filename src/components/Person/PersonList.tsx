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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPeople = async (url?: string) => {
    try {
      const data = await getPeople(url || '');
      setPerson(data);
    } catch (err) {
      setError('Failed to fetch people data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  if (loading) return <p className='text-center text-2xl mt-24'>Cargando lista de Personas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto mt-12">
      <div className='max-w-7xl m-auto text-center'>
        <h1 className='text-xl md:text-4xl text-green-700 font-bold pt-12'>
          Lista de Personas
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
                      <Link href={`/person/${person.url.split('/').slice(-2)[0]}`} className='text-blue-700'> 
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
            onClick={() => fetchPeople(person.previous)}
            disabled={!person.previous}
            className={`mx-2 px-4 py-2 font-semibold text-white rounded-lg ${person.previous ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Página Anterior
          </button>
          <button
            onClick={() => fetchPeople(person.next)}
            disabled={!person.next}
            className={`mx-2 px-4 py-2 font-semibold text-white rounded-lg ${person.next ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Página Siguiente
          </button>
        </div>

      </div>
    </div>
  );
};

export default PersonList;