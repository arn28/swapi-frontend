import { Link, useParams } from 'react-router-dom'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import './PersonDetail.scss'
import { getOnePeople, getVehicle } from '../api/endpoints'
import { Header } from './Header'
import { DataCell } from './DataCell'
import { getIdFromUrl } from '../utils/helpers'
import { PageContent } from './PageContent'
import { LightsaberFightAnimation } from './LightsaberFightAnimation'

interface IProps {
  setShowMenu: Dispatch<SetStateAction<boolean>>
}
export const PersonDetail = ({ setShowMenu }: IProps) => {
  const [person, setPerson] = useState<IPeople>()
  const [vehicles, setVehicles] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const params = useParams()

  const loadOnePeople = async () => {
    try {
      const response = await getOnePeople(Number(params.id))
      return response
    } catch (error) {
      console.log('🚀 ~ loadOnePeople ~ error:', error)
    }
  }

  const showOnePeople = async () => {
    setIsLoading(true)
    const response = await loadOnePeople()
    if (!response) return
    setPerson(response.data)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const loadVehicle = async (id: number) => {
    try {
      const response = await getVehicle(id)
      return response.data.name
    } catch (error) {
      console.log('🚀 ~ loadVehicle ~ error:', error)
    }
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
    <PageContent>
      <Link
        onClick={() => {
          setShowMenu(true)
        }}
        className='person-detail__header'
        to='/'
      >
        <Header title={person?.name} iconBack />
      </Link>
      {isLoading ? (
        <LightsaberFightAnimation />
      ) : (
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
          <div
            className='lightsaber-border'
            style={{
              backgroundImage: `url(./images/characters/${getIdFromUrl(
                person?.url || '',
              )}.jpg)`,
            }}
          ></div>
        </div>
      )}
    </PageContent>
  )
}
