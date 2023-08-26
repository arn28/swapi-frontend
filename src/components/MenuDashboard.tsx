import './MenuDashboard.scss'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getPeople } from '../api/endpoints'
import { Spinner } from './Spinner'
import { PersonCell } from './PersonCell'

interface IProps {
  showMenu: boolean
  setShowMenu: Dispatch<SetStateAction<boolean>>
}
export const MenuDashboard = ({ showMenu, setShowMenu }: IProps) => {
  const [people, setPeople] = useState<IPeople[]>([])
  const [isErrorLoading, SetIsErrorLoading] = useState<boolean>(false)
  const media = window.matchMedia('(max-width: 720px)')
  const loadPeople = async () => {
    try {
      const response = await getPeople()
      return response
    } catch (error) {
      SetIsErrorLoading(true)
    }
  }

  const showPeople = async () => {
    const response = await loadPeople()
    if (!response) return
    setPeople(response.data.results)
  }

  useEffect(() => {
    showPeople()
  }, [])

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
