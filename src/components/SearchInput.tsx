import React from 'react';

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ search, setSearch, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="mb-3 mt-4 flex flex-start">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por nombre"
        className="px-3 py-1 border rounded-l-lg text-md"
      />
      <button type="submit" className="px-3 py-1 border bg-green-700 text-white text-md rounded-r-lg">
        Buscar
      </button>
    </form>
  )
}

export default SearchInput