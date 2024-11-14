"use client";

import React, { useEffect, useState } from 'react';
import { getPlanet } from '@/service/swapiService';
import { Planet } from '@/types/planet';

interface PlanetDetailProps {
  id: string;
}

const PlanetDetail: React.FC<PlanetDetailProps> = ({ id }) => {
  const [planet, setPlanet] = useState<Planet>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPerson = async () => {
        try {
          const data = await getPlanet(id as string);
          setPlanet(data);
        } catch (err) {
          setError(`Failed to fetch person data. Error: ${err}`);
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
          <p><b>Rotacion:</b> {planet.rotation_period}</p>
          <p><b>Orbita:</b> {planet.orbital_period}</p>
          <p><b>Diametro:</b> {planet.diameter}</p>
          <p><b>Clima:</b> {planet.climate}</p>
          <p><b>Gravedad:</b> {planet.gravity}</p>
          <p><b>Terreno:</b> {planet.terrain}</p>
          <p><b>Agua en superficie:</b> {planet.surface_water}</p>
          <p><b>Poblacion:</b> {planet.population}</p>
          <p><b>Residentes:</b> {planet.residents}</p>
        </div>
      </div>
    )}
  </>);
};

export default PlanetDetail;