import './App.scss'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header'
import { MenuDashboard } from './components/MenuDashboard'
import { PersonDetail } from './components/PersonDetail'
import { WelcomePage } from './components/WelcomePage'
import { useState } from 'react'
import { FooterAttribution } from './components/FooterAttribution'

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(true)

  return (
    <>
      <BrowserRouter>
        <Link
          onClick={() => {
            setShowMenu(true)
          }}
          to='/'
        >
          <Header title='People from start wars' />
        </Link>
        <MenuDashboard showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/people/:id' element={<PersonDetail setShowMenu={setShowMenu} />} />
        </Routes>
        <FooterAttribution />
      </BrowserRouter>
    </>
  )
}

export default App
