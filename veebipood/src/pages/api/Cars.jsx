import { useEffect, useState } from "react"


function Cars() {

  const [cars, setCars] = useState([])


useEffect(() => {
  fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?")
  .then(res => res.json())  
  .then(json => setCars(json.results))  
}, []);



if (cars.length === 0) {
  return <div>Loading...</div>
}

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Drive</th>
            <th>Fuel type</th>
          
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.recordid}>
              <td>{car.make} </td>
               <td>{car.model}</td>
               <td>{car.year} </td>
               <td>{car.drive} </td>
               <td>{car.fueltype}</td>
               
            
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  )
}

export default Cars