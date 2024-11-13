"use client";

import React, { useEffect, useState } from 'react';
import { getPerson } from '@/service/swapiService';

interface PersonDetailProps {
  id: string;
}

const PersonDetail: React.FC<PersonDetailProps> = ({ id }) => {
  const [person, setPerson] = useState<any>(null);
  console.log("🚀 ~ person:", person)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPerson = async () => {
        try {
          const data = await getPerson(id as string);
          setPerson(data);
        } catch (err) {
          setError('Failed to fetch person data');
        } finally {
          setLoading(false);
        }
      };
      fetchPerson();
    }
  }, [id]);

  if (loading) return <p className='text-center text-2xl mt-24'>Cargando Persona por id...</p>;
  if (error) return <p>{error}</p>;

  return (<>  
    {(person && !!person.name) ? (
      <div className="mx-auto mt-12">
        <div className='max-w-3xl m-auto'>
          <p className='text-xl'><b>Nombre:</b> {person.name}</p>
          <p><b>Altura:</b> {person.height}</p>
          <p><b>Peso:</b> {person.mass}</p>
          <p><b>Color de cabello:</b> {person.hair_color}</p>
          <p><b>Color de ropa:</b> {person.skin_color}</p>
          <p><b>Color de ojos:</b> {person.eye_color}</p>
          <p><b>Cumpleaños:</b> {person.birth_year}</p>
          <p><b>Genero:</b> {person.gender}</p>
        </div>
      </div>
    ) : (
      <div className="mx-auto mt-24 text-center">
        <p className='text-xl'>No se encontraron datos de la persona</p>
      </div>
    )}
  </>);
};

export default PersonDetail;