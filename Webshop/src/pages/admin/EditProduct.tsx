
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useRef } from "react"
import { useEffect } from 'react';
import { useState } from 'react';
import type { Category } from '../../models/Category';
import type { Product } from '../../models/Products';

function EditProduct() {
  const { index } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const found = products[Number(index)];
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement> (null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const productsUrl = "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const categoriesUrl = "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState<Category[]>([]);



  useEffect(() => {
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);

  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []))
  }, []);


  const edit = () => {

    if(idRef.current === null || titleRef.current === null ||
      priceRef.current === null || imageRef.current === null ||
      descriptionRef.current === null || categoryRef.current === null ||
      ratingRef.current === null || activeRef.current === null
    ) {
      return;
    }

    products[Number(index)] =  {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value, 
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "rating": {
        "rate": Number(ratingRef.current.value),
        "count": Number(found.rating.count)
      },
      "active": activeRef.current.checked
  
    };

    fetch(productsUrl, { method: "PUT", body: JSON.stringify(products) })
      .then(() => navigate("/admin/maintain-products"));
  }

  if (!found) {
    return (
      <div>
        ❌ Product not found. <br />
        Please go back to <Link to="/admin/maintain-products">Maintain Products</Link> page.
      </div>
    );
  }

  // navigeerimiseks/URL vahetuseks:
  // <Link to=""    HTML ---> suunamiseks Reacti siseselt (App.jsx sees selline path="" olemas)
  // <a href=""     HTML ---> suunamiseks Reactist välja (teeb refreshi)

  // navigate + useNavigate()  JS ---> suunamiseks Reacti siseselt (App.jsx sees selline path="" olemas)
  // window.location.href=     JS ---> suunamiseks Reactist välja (teeb refreshi)

  return (
    <div>
      <label>ID</label> <br />
      <input ref={idRef} type="text" defaultValue={found.id} /> <br />
      <label>Title</label> <br />
      <input ref={titleRef} type="text" defaultValue={found.title} /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} type="number" defaultValue={found.price} /> <br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" defaultValue={found.image} /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />
      <label>Category</label> <br />
      {/* <input ref={categoryRef} type="text" defaultValue={found.category} /> <br /> */}
      <select ref={categoryRef} defaultValue={found.category.toLowerCase()}>
        {categories.map(category => <option key={category.name} value={category.name.toLowerCase()}>{category.name} </option>)}
      </select> <br />
      <label>Rating</label> <br />
      <input ref={ratingRef} type="number" defaultValue={found.rating.rate} step="0.1" min="0" max="5" /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" defaultChecked={found.active} /> <br />
      <button onClick={edit}>Save</button>


    </div>
  )
}

export default EditProduct

