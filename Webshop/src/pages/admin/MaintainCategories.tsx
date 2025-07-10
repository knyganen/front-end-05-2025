import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Category } from "../../models/Category";


function MaintainCategories() {
  const url = "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState<Category[]>([]);
  const categoryRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);

  const addCategory = () => {
    //kontrollib, kas Ref on HTML-s inputi külge korrektselt pandud
    if (categoryRef.current === null) {
      return
    }

    categories.push({ "name": categoryRef.current.value });
    setCategories(categories.slice());
    categoryRef.current.value = "";
    fetch(url, { method: "PUT", body: JSON.stringify(categories) });

  }

  const deleteCategory = (index: number) => {
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