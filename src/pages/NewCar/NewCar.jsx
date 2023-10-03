import './NewCar.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const NewCar = (props) => {
  const [formData, setFormData] = useState({
    _id: uuidv4().replaceAll('-', ''),
    make: '',
    model: '',
    year: '',
    color: ''
  })

  return (
    <>
      <div className="new-car-container">
        <h1>Add a car!</h1>
        <form>
          <input type="text" name="make" placeholder="Make"/>
          <input type="text" name="model" placeholder="Model"/>
          <input type="text" name="year" placeholder="Year"/>
          <input type="text" name="color" placeholder="Color"/>
          <button type="submit">Add Car 🏎️</button>
        </form>
      </div>
    </>
  )
}

export default NewCar