import React from 'react'

interface PaginationData {
  previous?: string;
  next?: string;
}

interface PaginationProps {
  data: PaginationData;
  fetchData: (url?: string) => void;
}

const Pagination: React.FC<PaginationProps> = ({ data, fetchData }) => {

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => fetchData(data?.previous)}
        disabled={!data?.previous}
        className={`mx-2 px-4 py-2 font-semibold text-white rounded-lg ${data?.previous ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-300 cursor-not-allowed'}`}
      >
        Página Anterior
      </button>
      <button
        onClick={() => fetchData(data?.next)}
        disabled={!data?.next}
        className={`mx-2 px-4 py-2 font-semibold text-white rounded-lg ${data?.next ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-300 cursor-not-allowed'}`}
      >
        Página Siguiente
      </button>
    </div>
  )
}

export default Pagination