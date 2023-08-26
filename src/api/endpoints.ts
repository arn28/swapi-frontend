import axios from 'axios'

const ENDPOINTS = {
  SWAPI: 'https://swapi.dev/api/',
}

export const getPeople = async (page: number = 1) => {
  const response = await axios.get(`${ENDPOINTS.SWAPI}people/?page=${page}`)
  return response
}

export const getOnePeople = async (id: number) => {
  const response = await axios.get(`${ENDPOINTS.SWAPI}people/${id}`)
  return response
}

export const getOnePlanet = async (id: number) => {
  const response = await axios.get(`${ENDPOINTS.SWAPI}planets/${id}`)
  return response
}

export const getVehicle = async (id: number) => {
  const response = await axios.get(`${ENDPOINTS.SWAPI}vehicles/${id}`)
  return response
}
