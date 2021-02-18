import { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Dropdown, Footer, NavBar } from './components'
import GlobalStyle from './Helpers/globalStyle'
import { AnimatePresence } from 'framer-motion'
import { About, Contacts, Home, Houses, Rentals } from './pages'

function App() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/rentals' component={Rentals} />
          <Route exact path='/houses' component={Houses} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/' component={Home} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
