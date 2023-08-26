import { Link } from 'react-router-dom'
import './PersonCell.scss'
interface IProps {
  name: string
  description?: string
  id?: string
}
export const PersonCell = ({ name, description, id }: IProps) => (
  <Link to={`/people/${id}`} className='person-cell__container'>
    <div className='person-cell__info'>
      <h2 className='person-cell__name'>{name}</h2>
      <p className='person-cell__description'>{description}</p>
    </div>
    <i className='person-cell__icon fa-solid fa-chevron-right'></i>
  </Link>
)
