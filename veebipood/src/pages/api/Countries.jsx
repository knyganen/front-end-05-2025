import { useEffect, useState } from "react";


function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then(res => res.json())  
      .then(json => setCountries(json))

    //https://restcountries.com/v3.1/all?fields=name

  }, []);

    if (countries.length === 0) {
      return <div>Loading...</div>

      }

      //saan aru, et Tarnija1 näite puhul, kuid ei saa täpselt aru
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            
            <th>Common name</th>
            <th>Official name</th>
            <th>Native official name</th>
            <th>Native common name</th>
          
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country.name.common}>
                <td>{country.name.common}</td>
                <td>{country.name.official}</td>
            
              <td>
                {typeof country.name.nativeName === "object"
                ? country.name.nativeName.fra?.official
                : "—"}
            </td>

              <td>
              {typeof country.name.nativeName === "object"
              ? country.name.nativeName.fra?.common
            : "—"}
            </td>
             
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Countries