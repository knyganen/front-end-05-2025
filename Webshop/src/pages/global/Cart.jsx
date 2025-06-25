import { useState } from "react";
import { toast } from "react-toastify";

function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const remove = (index) => {
    const updatedProducts = [...products];
    const removedProduct = updatedProducts[index]?.title || "Product";
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
    toast.error(`${removedProduct} removed from cart`, {
      position: "bottom-right",
      autoClose: 1500,
      theme: "colored",
    });
  };

  const emptyCart = () => {
    setProducts([]);
    localStorage.setItem("cart", JSON.stringify([]));
    toast.info("Cart emptied", {
      position: "bottom-right",
      autoClose: 1500,
      theme: "colored",
    });
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <button onClick={emptyCart}>Empty</button>
      <div>Cart total: {products.length} products</div>
      <br />

      {products.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          {products.map((product, index) => (
            <div key={index}>
              {product.title} — {product.price.toFixed(2)} €
              <button onClick={() => remove(index)}>x</button>
            </div>
          ))}
        </>
      )}

      <br />
      <div>Cart total: {calculateTotal().toFixed(2)} €</div>
    </div>
  );
}

export default Cart;
