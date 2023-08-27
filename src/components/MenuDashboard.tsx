import './MenuDashboard.scss'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getPeople } from '../api/endpoints'
import { Spinner } from './Spinner'
import { PersonCell } from './PersonCell'
import { getPageFromUrl } from '../utils/helpers'

interface IProps {
  showMenu: boolean
  setShowMenu: Dispatch<SetStateAction<boolean>>
}
export const MenuDashboard = ({ showMenu, setShowMenu }: IProps) => {
  const [people, setPeople] = useState<IPeople[]>([])
  const [page, setPage] = useState<number>(1)
  const [peopleLength, setPeopleLength] = useState<number>(0)
  const [isErrorLoading, SetIsErrorLoading] = useState<boolean>(false)
  const media = window.matchMedia('(max-width: 720px)')

  const loadPeople = async (page: number) => {
    try {
      const response = await getPeople(page)
      return response
    } catch (error) {
      SetIsErrorLoading(true)
    }
  }

  const showPeople = async () => {
    const response = await loadPeople(page)
    if (!response) return
    setPeopleLength(response.data.count)
    setPeople([...new Set(people.concat(response.data.results))])
    if (!response.data.next) return
    setPage(getPageFromUrl(response.data.next))
  }

  useEffect(() => {
    showPeople()
  }, [page])

  return (
    <>
      {showMenu && (
        <div className='dashboard__container'>
          <div className='menu__container'>
            {people.length > 0 ? (
              <>
                {people.map((person, index) => (
                  <PersonCell
                    onClick={() => {
                      if (media.matches) setShowMenu(false)
                    }}
                    person={person}
                    key={index}
                  />
                ))}
                {people.length !== peopleLength && <Spinner justify='center' label='Loading...' />}
              </>
            ) : isErrorLoading ? (
              <h2 className='menu__error-message'>Failed to Load Data</h2>
            ) : (
              <Spinner justify='center' label='Loading...' />
            )}
          </div>
        </div>
      )}
    </>
  )
}
