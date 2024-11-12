const API_URL = 'https://swapi.dev/api';

export const getPeople = async () => {
  const response = await fetch(`${API_URL}/people/`);
  const data = await response.json();
  return data;
};

export const getPerson = async (id: string) => {
  const response = await fetch(`${API_URL}/people/${id}/`);
  const data = await response.json();
  return data;
};

export const getStarships = async () => {
  const response = await fetch(`${API_URL}/starships/`);
  const data = await response.json();
  return data;
};

export const getStarship = async (id: string) => {
  const response = await fetch(`${API_URL}/starships/${id}/`);
  const data = await response.json();
  return data;
};

export const getPlanets = async () => {
  const response = await fetch(`${API_URL}/planets/`);
  const data = await response.json();
  return data;
};

export const getPlanet = async (id: string) => {
  const response = await fetch(`${API_URL}/planets/${id}/`);
  const data = await response.json();
  return data;
};