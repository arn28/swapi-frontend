import './Header.scss'

interface IProps {
  title?: string
  iconBack?: boolean
}

export const Header = ({ title, iconBack }: IProps) => {
  return (
    <div className='header__container'>
      {iconBack && <i className='header__icon fa-solid fa-chevron-left'></i>}
      <h1 className='header__title'>{title}</h1>
    </div>
  )
}
