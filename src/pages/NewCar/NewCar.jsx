import './NewCar.css'

const NewCar = (props) => {
  return (
    <>
      <div className="new-car-container">
        <h1>Add a car!</h1>
        <form>
          <input type="text" name="make" placeholder="Make"/>
          <input type="text" name="model" placeholder="Model"/>
        </form>
      </div>
    </>
  )
}

export default NewCar