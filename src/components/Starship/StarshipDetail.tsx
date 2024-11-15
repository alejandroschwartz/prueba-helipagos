"use client";

import React, { useEffect, useState } from 'react';
import { getStarship } from '@/service/swapiService';
import { Starship } from '@/types/starship';

interface StarshipDetailProps {
  id: string;
}

const StarshipDetail: React.FC<StarshipDetailProps> = ({ id }) => {
  const [starship, setStarship] = useState<Starship>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPerson = async () => {
        try {
          const data = await getStarship(id as string);
          setStarship(data);
        } catch (err) {
          setError(`Failed to fetch person data. Error: ${err}`);
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
      <div className="mx-auto mt-12 px-2">
        <div className='max-w-3xl m-auto'>
          <p className='text-xl'><b>Nombre:</b> {starship.name}</p>
          <p><b>Modelo:</b> {starship.model}</p>
          <p><b>Fabricante:</b> {starship.manufacturer}</p>
          <p><b>Costo en creditos:</b> {starship.cost_in_credits}</p>
          <p><b>Largo:</b> {starship.length}</p>
          <p><b>Velocidad maxima atmosferica:</b> {starship.max_atmosphering_speed}</p>
          <p><b>Tripulacion:</b> {starship.crew}</p>
          <p><b>Pasajeros:</b> {starship.passengers}</p>
          <p><b>Capacidad de carga:</b> {starship.cargo_capacity}</p>
          <p><b>Consumibles:</b> {starship.consumables}</p>
          <p><b>Calificacion de hiperimpulso:</b> {starship.hyperdrive_rating}</p>
          <p><b>MGLT:</b> {starship.MGLT}</p>
          <p><b>Clase de nave:</b> {starship.starship_class}</p>
        </div>
      </div>
    )}
  </>);
};

export default StarshipDetail;