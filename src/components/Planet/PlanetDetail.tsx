"use client";

import React, { useEffect, useState } from 'react';
import { getPlanet } from '@/service/swapiService';

interface PlanetDetailProps {
  id: string;
}

const PlanetDetail: React.FC<PlanetDetailProps> = ({ id }) => {
  const [planet, setPlanet] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPerson = async () => {
        try {
          const data = await getPlanet(id as string);
          setPlanet(data);
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
    {planet && (
      <div className="mx-auto mt-12">
        <div className='max-w-3xl m-auto'>
          <p className='text-xl'><b>Nombre:</b> {planet.name}</p>
          <p><b>Altura:</b> {planet.height}</p>
          <p><b>Peso:</b> {planet.mass}</p>
          <p><b>Color de cabello:</b> {planet.hair_color}</p>
          <p><b>Color de ropa:</b> {planet.skin_color}</p>
          <p><b>Color de ojos:</b> {planet.eye_color}</p>
          <p><b>Cumpleaños:</b> {planet.birth_year}</p>
          <p><b>Genero:</b> {planet.gender}</p>
        </div>
      </div>
    )}
  </>);
};

export default PlanetDetail;