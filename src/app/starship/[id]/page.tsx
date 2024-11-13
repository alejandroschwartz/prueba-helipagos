import StarshipDetail from '@/components/Starship/StarshipDetail';
import Link from 'next/link';
import React from 'react'

interface Params {
  id: string;
}

interface PageProps {
  params: Params;
}

const Page: React.FC<PageProps> = ({ params }) => {

  return (
    <div className='mx-auto mt-12'>
      <h1 className='text-xl md:text-4xl text-center text-green-700 font-bold pt-12'>
        Starship id:  {params.id}
      </h1>
      <StarshipDetail id={params.id} />
      <div className='w-full mt-24 flex justify-center'>
        <Link href="/starship" className='mx-2 px-4 py-2 font-semibold text-white rounded-lg bg-green-700 hover:bg-green-800'>
          Volver a la lista de Naves
        </Link>
      </div>
    </div>
  )
}

export default Page;