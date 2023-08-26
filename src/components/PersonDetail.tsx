import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './PersonDetail.scss'
import { getOnePeople, getVehicle } from '../api/endpoints'
import { Header } from './Header'
import { DataCell } from './DataCell'
import { getIdFromUrl } from '../utils/helpers'

export const PersonDetail = () => {
  const [person, setPerson] = useState<IPeople>()
  const [vehicles, setVehicles] = useState<string[]>([])
  const params = useParams()

  const loadOnePeople = async () => {
    try {
      const response = await getOnePeople(Number(params.id))
      return response
    } catch (error) {}
  }

  const showOnePeople = async () => {
    const response = await loadOnePeople()
    if (!response) return
    setPerson(response.data)
  }

  const loadVehicle = async (id: number) => {
    try {
      const response = await getVehicle(id)
      return response.data.name
    } catch (error) {}
  }

  const getVehicles = async () => {
    if (!person) return []

    const updatedVehicles = await Promise.all(
      person.vehicles.map(async (vehicle) => {
        const vehicleResponse = await loadVehicle(getIdFromUrl(vehicle))
        if (!vehicleResponse) return null
        return vehicleResponse
      }),
    )

    setVehicles(updatedVehicles.filter((vehicle) => vehicle !== null))
  }

  useEffect(() => {
    showOnePeople()
  }, [params])

  useEffect(() => {
    getVehicles()
  }, [person])

  return (
    <div className='person-detail__container'>
      <Link to='/'>
        <Header title={person?.name} iconBack />
      </Link>
      <div className='person-detail__data'>
        <h2 className='person-detail__name'>{person?.name}</h2>
        <h3 className='person-detail__category'>General Information</h3>
        <div className='person-detail__general-info'>
          <DataCell label='Eye Color' data={person?.eye_color} />
          <DataCell label='Hair Color' data={person?.hair_color} />
          <DataCell label='Skin Color' data={person?.skin_color} />
          <DataCell label='Birth Year' data={person?.birth_year} />
        </div>
        {vehicles.length > 0 && (
          <>
            <h3 className='person-detail__category'>Vehicles</h3>
            {vehicles.map((vehicle, index) => (
              <DataCell key={index} label={vehicle} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
