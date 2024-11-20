import React from 'react';
import PlanetList from '../../components/Planet/PlanetList';

const PlanetPage = () => {
  return (
    <div className="mx-auto mt-12 px-2">
      <div className='max-w-7xl m-auto text-center'>
        <h1 className='text-xl md:text-4xl text-green-700 font-bold pt-12'>
          Lista de Planetas
        </h1>
        <PlanetList />
      </div>
    </div>
  )
};

export default PlanetPage;