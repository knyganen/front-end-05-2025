import { useState, useRef } from "react";
import productsFromFile from "../../data/products.json";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";
import { toast } from "react-toastify";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const productRef = useRef();
  const priceRef = useRef();
  const pictureRef = useRef();
  const activeRef = useRef();
  const ratingRef = useRef();
  const searchRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const deleteProduct = (index) => {
    const updatedProducts = products.slice();
    const deletedProduct = updatedProducts[index]?.title || "Product";
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    toast.error(`${deletedProduct} deleted!`);
  };
  
  
  const addProduct = () => {
    const newProduct = {
      title: productRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      price: Number(priceRef.current.value),
      active: activeRef.current.checked,
      image: pictureRef.current.value,
      rating: Number(ratingRef.current.value),
      
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    toast.success(`${newProduct.title} added!`);

    productRef.current.value = "";
    priceRef.current.value = "";
    activeRef.current.checked = true;
    pictureRef.current.value = "";
    ratingRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "";
  };

  const search = () => {
    const keyword = searchRef.current.value.toLowerCase();

    if (keyword === "") {
      setProducts(productsFromFile.slice());
      return;
    }

    const result = products.filter((product) =>
      product.title.toLowerCase().includes(keyword)
    );
    setProducts(result);
  };

  return (
    <div>
      <AdminHome />

      <label>Search product</label> <br />
      <input ref={searchRef} type="text" onChange={search} /> <br /> <br />

      <label>Product name</label> <br />
      <input ref={productRef} type="text" /> <br />
      <label>Product description</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>Product category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <label>Product price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Product picture</label> <br />
      <input ref={pictureRef} type="text" /> <br />
      <label>Product active</label> <br />
      <input ref={activeRef} type="checkbox" defaultChecked /> <br />
      <label>Product rating</label> <br />
      <input ref={ratingRef} type="number" /> <br />
    
      <button onClick={addProduct}>Add</button> <br />

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Product name</th>
            <th>Product price</th>
            <th>Product picture</th>
            <th>Description</th>
            <th>Category</th>
            <th>Product active</th>
            <th>Rating</th>
          
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={product.active ? "active-product" : "notactive-product"}
            >
              <td>{index}</td>
               <td>{product.title}</td>
               <td>{product.price.toFixed(2)} €</td>
              <td>{product.image && (
                  <img className="picture" src={product.image} alt="Product" />
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
            
              <td>
                <button onClick={() => deleteProduct(index)}>x</button>
              </td>
              <td>
                <Link to={"/admin/edit-product/" + index}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaintainProducts;
