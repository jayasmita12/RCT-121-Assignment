import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ContactList } from './components/ContactList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ContactList/>
    </div>
  )
}

export default App
