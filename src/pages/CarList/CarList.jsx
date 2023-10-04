import Car from "../../components/Car/Car"

const CarList = (props) => {
  return ( 
    <>
      <h1>All Cars</h1>
      {props.cars.map(car => 
        <Car key={car._id} car={car} />
      )}
    </>
  )
}

export default CarList