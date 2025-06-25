import { useEffect, useState } from "react"


function Vocabulary() {
const [types, setTypes] = useState([]);

useEffect(() => {
  fetch("https://marineregions.org/rest/getGazetteerTypes.json")
  .then(res => res.json())  //metaandmete tagastus
  .then(json => setTypes(json))

}, []);

if (types.length === 0) {
  return <div>Loading...</div>
}


    //https://marineregions.org/rest/getGazetteerTypes.json
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {types.map(type => (
            <tr key={type.typeID}>
               <td>{type.typeID}</td>
               <td>{type.type} </td>
               <td>{type.description} </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Vocabulary