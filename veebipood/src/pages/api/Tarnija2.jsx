import { useEffect, useState } from "react"

function Tarnija2() {
const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("https://api.escuelajs.co/api/v1/products")
  .then(res => res.json())  //metaandmete tagastus
  .then(json => setProducts(json))

}, []);

if (products.length === 0) {
  return <div>Loading...</div>
}

  return (
    <div>
        <table>
        <thead>
          <tr>
            
            <th>Product name</th>
            <th>Product price</th>
            <th>Product picture</th>
            <th>Description</th>
            <th>Category</th>
            <th>Product active</th>
          
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
               <td>{product.title}</td>
               <td>{product.price.toFixed(2)} €</td>
              <td>{product.images && (
                  <img className="picture" src={product.images} alt="Product" style= {{ width: "80px"}} />
                )}
              </td>
              <td>{product.description} </td>
              <td>{product.category.name} </td>
              <td>{product.active ? "✅" : "❌"}</td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tarnija2