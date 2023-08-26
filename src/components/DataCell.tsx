import './DataCell.scss'
interface IProp {
  label?: string
  data?: string
}
export const DataCell = ({ label, data }: IProp) => (
  <div className='data-cell__container'>
    <h3 className='data-cell__label'>{label}</h3>
    <p className='data-cell__data'>{data}</p>
  </div>
)
