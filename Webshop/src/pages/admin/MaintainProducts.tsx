import { useState, useRef } from "react";
//import productsFromFile from "../../data/products.json";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome.tsx";
import { toast } from "react-toastify";
import { useEffect } from "react";
import type { Product } from "../../models/Products";

function MaintainProducts() {
  const [products, setProducts] = useState<Product[]>([]); //miks 2 usestate: väljanäidatavad tooted. kõikuvas seisundis -> HTMls
  const [dbProducts, setDbProducts] = useState<Product[]>([]); //andmebaasitooted. kogu aeg samas seisus, see ei muutu. Varem kasutasime productsFromFile
  const searchRef = useRef<HTMLInputElement>(null);
  const url =
    "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setDbProducts(json || []);
      });
  }, []);

  const deleteProduct = (index: number) => {
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice());
    toast.error(`Product deleted!`);
    fetch(url, { method: "PUT", body: JSON.stringify(dbProducts) });
  };

  const search = () => {
    if (searchRef.current === null) {
      return;
    }
    const keyword = searchRef.current.value.toLowerCase();

    const result = dbProducts.filter((product) =>
      product.title.toLowerCase().includes(keyword)
    );
    setProducts(result);
  };

  return (
    <div>
      <AdminHome />
      <label>Search product</label> <br />
      <input ref={searchRef} type="text" onChange={search} /> <br /> <br />
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
              className={
                product.active ? "active-product" : "notactive-product"
              }
            >
              <td>{index}</td>
              <td>{product.title}</td>
              <td>{typeof product.price} €</td>
              <td>
                {product.image && (
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
