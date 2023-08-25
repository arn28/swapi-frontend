import './Header.scss'

interface IProps {
  title: string
}

export const Header = ({ title }: IProps) => {
  return (
    <div className='header__container'>
      <h1 className='header__title'>{title}</h1>
    </div>
  )
}
