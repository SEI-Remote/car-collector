import './Car.css'

const Car = (props) => {

  function handleDelete() {
    props.handleDeleteCar(props.car._id)
  }

  return (
    <>
      <div className="car-card">
        <h3 style={{color: props.car.color}}>{props.car.year} {props.car.make} {props.car.model}</h3>
        <button onClick={handleDelete} className='delete-btn'>🗑️</button>
      </div>
    </>
  )
}

export default Car