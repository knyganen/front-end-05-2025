import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import "../../css/HomePage.css";
import { useEffect } from "react";
import { CartSumContext } from "../../context/CartSumContext";
import { Product } from "../../models/Products";
import { Category } from "../../models/Category";
import { CartProduct } from "../../models/CartProduct";
import SortButtons from "../../components/home/SortButtons";
import CarouselGallery from "../../components/home/CarouselGallery";

function HomePage() {
  const productsUrl = "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const categoriesUrl = "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const {cartSum, setCartSum} = useContext(CartSumContext);

  useEffect(() => {
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
    }, []);

    useEffect(() => {
      fetch(productsUrl)
        .then(res => res.json())
        .then(json => {
          setProducts(json || []);
          setDbProducts(json || []);
        })
    }, []);

  const addToCart = (clickedProduct: Product) => {
    const cart: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartProduct = cart.find(cp => cp.product.id === clickedProduct.id)
    if (cartProduct !== undefined) {
      //cartProduct.quantity++;
      //cartProduct.quantity+= 1;
      cartProduct.quantity = cartProduct.quantity + 1;
    } else {
       cart.push({product: clickedProduct, quantity: 1});
    }
   
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Product added to cart!", );
    setCartSum(cartSum + clickedProduct.price);
  };

  

  // const filterByMensClothing = () => {
  //   const result = dbProducts.filter(product => product.category === "men's clothing");
  //   setProducts(result);
  // }

  // const filterByWomensClothing = () => {
  //   const result = dbProducts.filter(product => product.category === "women's clothing");
  //   setProducts(result);
  // }

  // const filterByJewelery = () => {
  //   const result = dbProducts.filter(product => product.category === "jewelery");
  //   setProducts(result);
  // }

  const showAll = () => {
    setProducts(dbProducts.slice())
  }

  const filterByCategory = (clickedCategory: string) => {
    const result = dbProducts.filter(product => product.category === clickedCategory.toLowerCase());
    setProducts(result);
  }


  return (
    <div>
     <CarouselGallery />
      <SortButtons products={products} setProducts={setProducts} />
      <br /> 
      <button onClick={showAll}>All</button>
      {/* <button onClick={filterByElectronics}>Electronics</button>
      <button onClick={filterByMensClothing}>Men's clothing</button>
      <button onClick={filterByWomensClothing}>Women's clothing</button>
      <button onClick={filterByJewelery}>Jewelery</button> */}
      {categories.map(category => 
      <button key={category.name} onClick={() => filterByCategory(category.name)}>
        {category.name}
        </button>)}
      


      <div className="products">
        {products.map((product)  =>
        <div key={product.id} className="home-product">
          <img className="home-picture"  src={product.image} alt="" />
          <div className="home-title">{product.title}</div>
          <div className="home-price">{Number(product.price).toFixed(2)} €</div>
          <div>Rating: {product.rating?.rate ?? "N/A"} </div>
          <button onClick={() => addToCart(product)}>Add to cart</button> 
          <Link to={"/product/" + product.title}>
            <button>View details</button>
          </Link>
          <br /><br />
        </div>
      )}</div>
      

    </div>
  );
}

export default HomePage;
