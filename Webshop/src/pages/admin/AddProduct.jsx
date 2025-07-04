import { useRef, useState } from "react"
import { toast } from "react-toastify"
import { useEffect } from "react";


function AddProduct() {
  const [message, setMessage] = useState("");
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const activeRef = useRef();
  const productsUrl = "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const categoriesUrl = "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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

  function add() {
    if (titleRef.current.value === "") {
      setMessage("Uh oh, title can't be empty!");
      return;
    }

    if (titleRef.current.value.length < 4) {
      setMessage("Title has to be at least 4 characters long!");
      return;
    }

    products.push({
      "id": Number(idRef.current.value),
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "rating": {
        "rate": Number(ratingRef.current.value),
        "count": 0

      },
      "active": activeRef.current.checked



    });

    toast.success("Product added successfully!");
    fetch(productsUrl, { method: "PUT", body: JSON.stringify(products) })

  }

  return (
    <div>
      <p>{message}</p>
      <label>ID</label> <br />
      <input ref={idRef} type="text" /> <br />
      <label>Title</label> <br />
      <input ref={titleRef} type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} type="number" min="0" /> <br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>Category</label> <br />
      {/* <input ref={categoryRef}  type="text" /> <br /> */}
      <select ref={categoryRef} >
        {categories.map(category => <option key={category.name}>{category.name} </option>)}
      </select> <br />
      <label>Rating (1-5)</label> <br />
      <input ref={ratingRef} type="number" min="0" step="0.1" max="5" /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" defaultChecked /> <br />
      <br />
      <button onClick={add}>Add</button> <br />
    </div>
  )
}

export default AddProduct