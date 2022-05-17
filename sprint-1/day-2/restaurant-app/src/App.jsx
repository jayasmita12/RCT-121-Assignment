import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { RestaurantDetails } from './components/RestaurantDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RestaurantDetails/>
    </div>
  )
}

export default App
