import { useEffect, useState } from "react"


function Tarnija1() {
    //kui on API otspunktist andmete võtmine, siis pean sulgude sisse
    //panema algcäärtuseks tühja väärtuse (mitte tühjuse)
    //tühjus: = useState()  =useState(undefined) =usestate(null)
    //tühjus väärtus: kui võtan Array'd: usestate([])
    //tühjus objekt: useState({})
    //tühjus string: useState("")

    const [products, setProducts] = useState([]);
    //senikaua kuni võtab API otspunktist, on algväärtus tühi

//https://fakestoreapi.com/products
//uef+enter ---> useEffectist import
useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
            <th>Rating</th>

          
  
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
               <td>{product.title}</td>
               <td>{product.price.toFixed(2)} €</td>
              <td>{product.image && (
                  <img className="picture" src={product.image} alt="Product" style= {{ width: "80px"}} />
                )}
              </td>
              <td>{product.description} </td>
              <td>{product.category} </td>
              <td>{product.active ? "✅" : "❌"}</td>
              
              <td>
                {typeof product.rating === "object"
                  ? product.rating.rate + " ★ (" + product.rating.count + ")"
                  : product.rating}
              </td>
            
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tarnija1