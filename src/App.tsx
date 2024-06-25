import './App.scss'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
      <Router>
        <Link
          onClick={() => {
            setShowMenu(true)
          }}
          to='/'
          // style={{ position: 'fixed', width: '100%' }}
        >
          <Header title='People from start wars' />
        </Link>
        <MenuDashboard showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route
            path='/people/:id'
            element={<PersonDetail setShowMenu={setShowMenu} />}
          />
        </Routes>
        <FooterAttribution />
      </Router>
    </>
  )
}

export default App
