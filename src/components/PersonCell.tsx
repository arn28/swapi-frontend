import './PersonCell.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getIdFromUrl } from '../utils/helpers'
import { getOnePlanet } from '../api/endpoints'
interface IProps {
  person: IPeople
  onClick?: () => void
}

export const PersonCell = ({ person, onClick }: IProps) => {
  const [description, setDescription] = useState<string>('-')

  const loadHomeworld = async () => {
    try {
      const response = await getOnePlanet(getIdFromUrl(person.homeworld))
      setDescription(response.data.name)
      return response
    } catch (error) {}
  }

  useEffect(() => {
    loadHomeworld()
  }, [person])

  return (
    <Link
      onClick={onClick}
      to={`/people/${getIdFromUrl(person.url)}`}
      className='person-cell__container'
    >
      <div className='person-cell__info'>
        <h2 className='person-cell__name'>{person.name}</h2>
        <p className='person-cell__description'>{description}</p>
      </div>
      <i className='person-cell__icon fa-solid fa-chevron-right'></i>
    </Link>
  )
}
