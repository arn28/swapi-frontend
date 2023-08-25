import './Spinner.scss'
interface IProps {
  label?: string
  justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}

export const Spinner = ({ label, justify }: IProps) => (
  <div style={{ justifyContent: justify }} className='spinner__container'>
    <div className='spinner__icon'></div>
    <p className='spinner__label'> {label}</p>
  </div>
)
