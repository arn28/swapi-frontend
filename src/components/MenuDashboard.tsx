import './MenuDashboard.scss'
import { useEffect, useState } from 'react'
import { getPeople } from '../api/endpoints'
import { Spinner } from './Spinner'
import { PersonCell } from './PersonCell'

export const MenuDashboard = () => {
  const [people, setPeople] = useState<IPeople[]>([])
  const [isErrorLoading, SetIsErrorLoading] = useState<boolean>(false)

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
    <div className='dashboard__container'>
      <div className='menu__container'>
        {people.length > 0 ? (
          <>
            {people.map((person, index) => (
              <PersonCell
                name={person.name}
                description={person.birth_year}
                key={index}
                id={person.url?.slice(29, -1)}
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
  )
}
