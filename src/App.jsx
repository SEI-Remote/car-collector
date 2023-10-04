// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Landing from './pages/Landing/Landing'
import NewCar from './pages/NewCar/NewCar'
import CarList from './pages/CarList/CarList'

// components
import NavBar from './components/NavBar/NavBar'

// services

// styles
import './App.css'

function App() {
  const [cars, setCars] = useState([])
  const navigate = useNavigate()

  function handleAddCar(carFormData) {
    const newCarsArray = [...cars, carFormData]
    setCars(newCarsArray)
    navigate('/cars')
  }

  function handleDeleteCar(carId) {
    const newCarsArray = cars.filter(car => car._id !== carId)
    setCars(newCarsArray)
  }

  return (
    <>
      <NavBar  />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route 
          path="/cars/new" 
          element={<NewCar handleAddCar={handleAddCar} />} 
        />
        <Route 
          path="/cars" 
          element={<CarList cars={cars} handleDeleteCar={handleDeleteCar} />}
        />
      </Routes>
    </>
  )
}

export default App
