import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "../../css/cart.css";
import minusIcon from "../../assets/minus.png";
import plusIcon from "../../assets/plus.png";
import binIcon from "../../assets/bin.png";
import { CartProduct } from "../../models/CartProduct";
import { CartSumContext } from "../../context/CartSumContext";
import ParcelMachines from "../../components/ParcelMachines";
import Payment from "../../components/Payment";

function Cart() {
  const [products, setProducts] = useState<CartProduct[]>(JSON.parse(localStorage.getItem("cart") || "[]"));
  const {cartSum, setCartSum} = useContext(CartSumContext);

  const emptyCart = () => {
    setCartSum(0);
    setProducts([]);
    localStorage.setItem("cart", JSON.stringify([]));
    toast.info("Cart emptied", {
      
    });
  };

  const decreaseQuantity = (cartProduct: CartProduct) => {
    cartProduct.quantity--; //cartProduct.quantity = cartProduct.quantity - 1;
    if (cartProduct.quantity === 0) {
      const index = products.indexOf(cartProduct);
      remove(index);
    } else {
      setCartSum(cartSum - cartProduct.product.price); //Navbari summa uuendus
      setProducts(products.slice()); //HTMLi uuendus
      localStorage.setItem("cart", JSON.stringify(products)); //localStorage uuendus
    }

  }

  const increaseQuantity = (cartProduct: CartProduct) => {
    cartProduct.quantity++; 
    setCartSum(cartSum + cartProduct.product.price); 
    setProducts(products.slice()); 
    localStorage.setItem("cart", JSON.stringify(products)); 

  }

  const remove = (index: number) => {
    setCartSum(cartSum - products[index].product.price * products[index].quantity);
    //const updatedProducts = [...products];
    //const removedProduct = updatedProducts[index]?.title || "Product";
    products.splice(index, 1);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    toast.error(`${products[index].product.title} removed from cart`);
  };

 

  const calculateTotal = () => {
    return products.reduce((total, cp) => total + cp.product.price * cp.quantity, 0);
  };

  return (
    <div>
      {products.length > 0 && 
      <div>
      <button onClick={emptyCart}>Empty</button>
      <div>Shopping cart: {products.length} products</div>

      </div>
      }
      
      <br />

      {products.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          {products.map((cartProduct, index) => (
          <div key={index} className="product-wrapper">
          <div className="product">
            <img className="picture" src={cartProduct.product.image} alt="" />
            <div className="title">{cartProduct.product.title}</div>

            <div className="prod-row">
            <div className="price">{cartProduct.product.price.toFixed(2)} €</div>
            
            <div className="quantity">
              <img className="button" onClick={() => decreaseQuantity(cartProduct)} src={minusIcon} alt="" />
              <div>{cartProduct.quantity} tk</div>
              <img className="button" onClick={() => increaseQuantity(cartProduct)} src={plusIcon} alt="" />
            </div>   
            
            <div className="total">{(cartProduct.product.price * cartProduct.quantity).toFixed(2)} €</div>
            </div>

            <img className="button delete" onClick={() => remove(index)} src={binIcon} alt="" />
          </div>

            <div className="mobile-quantity">
              <img className="button" onClick={() => decreaseQuantity(cartProduct)} src={minusIcon} alt="" />
              <div>{cartProduct.quantity} tk</div>
              <img className="button" onClick={() => increaseQuantity(cartProduct)} src={plusIcon} alt="" />
          </div>
</div>
          ))}
        </>
      )}

      <br />
      {products.length > 0 && 
      <div>
        <div>Cart total amount: {calculateTotal().toFixed(2)} €</div>
        <ParcelMachines />
        <Payment sum={calculateTotal()} />

      </div>
      
      }
      
    </div>
  );
}

export default Cart;
