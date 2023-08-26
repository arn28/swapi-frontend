import './PageContent.scss'
interface IProps {
  children?: React.ReactNode
}
export const PageContent = ({ children }: IProps) => (
  <div className='page-content__container'>{children}</div>
)
