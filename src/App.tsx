import { useEffect, useState } from 'react'
import './App.scss'
import { getPeople } from '../src/api/endpoints'
import { message } from 'antd'
import { Header } from './components/Header'

function App() {
  const [people, setPeople] = useState<IPeople[]>([])

  const loadPeople = async () => {
    try {
      const response = await getPeople()
      return response
    } catch (error) {
      message.error('Something went wrong, please try again')
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
      <Header title='People from start wars' />
      <div>Star wars</div>
      {people.map((person, index) => (
        <div key={index}>{person.name}</div>
      ))}
      <button
        onClick={() => {
          console.log(people)
          people.map((person) => console.log(person.name))
        }}
      >
        console
      </button>
    </>
  )
}

export default App
