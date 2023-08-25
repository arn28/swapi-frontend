import './PersonCell.scss'
interface IProps {
  name: string
  description?: string
}
export const PersonCell = ({ name, description }: IProps) => (
  <div className='person-cell__container'>
    <div className='person-cell__info'>
      <h2 className='person-cell__name'>{name}</h2>
      <p className='person-cell__description'>{description}</p>
    </div>
    <i className='person-cell__icon fa-solid fa-chevron-right'></i>
  </div>
)
