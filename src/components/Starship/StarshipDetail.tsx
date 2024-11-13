"use client";

import React, { useEffect, useState } from 'react';
import { getStarship } from '@/service/swapiService';

interface StarshipDetailProps {
  id: string;
}

const StarshipDetail: React.FC<StarshipDetailProps> = ({ id }) => {
  const [starship, setStarship] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPerson = async () => {
        try {
          const data = await getStarship(id as string);
          setStarship(data);
        } catch (err) {
          setError('Failed to fetch person data');
        } finally {
          setLoading(false);
        }
      };
      fetchPerson();
    }
  }, [id]);

  if (loading) return <p className='text-center text-2xl mt-24'>Cargando Nave por id...</p>;
  if (error) return <p>{error}</p>;

  return (<>  
    {starship && (
      <div className="mx-auto mt-12">
        <div className='max-w-3xl m-auto'>
          <p className='text-xl'><b>Nombre:</b> {starship.name}</p>
          <p><b>Altura:</b> {starship.height}</p>
          <p><b>Peso:</b> {starship.mass}</p>
          <p><b>Color de cabello:</b> {starship.hair_color}</p>
          <p><b>Color de ropa:</b> {starship.skin_color}</p>
          <p><b>Color de ojos:</b> {starship.eye_color}</p>
          <p><b>Cumpleaños:</b> {starship.birth_year}</p>
          <p><b>Genero:</b> {starship.gender}</p>
        </div>
      </div>
    )}
  </>);
};

export default StarshipDetail;