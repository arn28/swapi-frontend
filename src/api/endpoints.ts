import axios from 'axios'

const ENDPOINTS = {
  PEOPLE: 'https://swapi.dev/api/people/?page=',
}
export const getPeople = async (page: number = 1) => {
  const response = await axios.get(`${ENDPOINTS.PEOPLE}${page}`)
  return response
}
