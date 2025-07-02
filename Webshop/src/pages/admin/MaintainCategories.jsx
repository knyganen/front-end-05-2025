import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";


function MaintainCategories() {
  const url = "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);

  const addCategory = () => {
    categories.push({ "name": categoryRef.current.value });
    setCategories(categories.slice());
    categoryRef.current.value = "";
    fetch(url, { method: "PUT", body: JSON.stringify(categories) });

  }

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    setCategories(categories.slice());
    fetch(url, { method: "PUT", body: JSON.stringify(categories) });
  }

  return (
    <div>
      <label>Category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Add</button>
      <div>Total categories: {categories.length}</div>
      {categories.map((category, index) =>
        <div key={category.name}>
          {category.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>
      )}
    </div>
  )
}


export default MaintainCategories