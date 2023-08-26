import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './PersonDetail.scss'
import { getOnePeople } from '../api/endpoints'
import { Header } from './Header'
import { DataCell } from './DataCell'

export const PersonDetail = () => {
  const [person, setPerson] = useState<IPeople>()
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

  useEffect(() => {
    showOnePeople()
  }, [params])

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
        <h3 className='person-detail__category'>Vehicles</h3>
      </div>
    </div>
  )
}
