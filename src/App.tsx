import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { MenuDashboard } from './components/MenuDashboard'
import { PersonDetail } from './components/PersonDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header title='People from start wars' />
        <MenuDashboard />
        <Routes>
          {/* <Route path='/' element={<PersonDetail />} /> */}
          <Route path='/people/:id' element={<PersonDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
