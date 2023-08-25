import axios from 'axios'

const ENDPOINTS = {
  PEOPLE: 'https://swapi.dev/api/people/',
}
export const getPeople = async (page: number = 1) => {
  const response = await axios.get(`${ENDPOINTS.PEOPLE}?page=${page}`)
  return response
}

export const getOnePeople = async (id: number) => {
  const response = await axios.get(`${ENDPOINTS.PEOPLE}${id}`)
  return response
}
