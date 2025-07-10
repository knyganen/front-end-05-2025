import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [products, setProducts] = useState([
    { id: 1, title: "Diivan", price: 500 },
    { id: 2, title: "Lamp", price: 85 },
  ]);

  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        title: "",
        price: "",
      },
    ]);
  };

  const deleteLastProduct = () => {
    return setProducts(products.slice(0, -1));
  };

  const handleInputPriceChange = (id, event) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, price: event.target.value } : product
    );
    setProducts(newProducts);
  };

  const handleInputTitleChange = (id, event) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, title: event.target.value } : product
    );
    setProducts(newProducts);
  };

  const formatNumber = (sum) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(sum);
  };

  const total = products.reduce(
    (sum, product) => Number(sum) + Number(product.price),
    0
  );

  return (
    <>
      <div className="Calculator__Wrapper">
        <h2>
          <strong>Koosta soovinimekiri</strong> ja vaata oma <br />
          uue sisustuse kuumakset
        </h2>

        <div className="Calculator">
          <div className="Calculator__Table">
            <div className="Calculator__Table__Row">
              <div className="Calculator__Table__Row__Cell">TOODE</div>
              <div className="Calculator__Table__Row__Cell">HIND</div>
            </div>

            {products.map((product) => (
              <div className="Calculator__Table__Row" key={product.id}>
                <div className="Calculator__Table__Row__Cell">
                  <input
                    className="Calculator__Input"
                    type="text"
                    onChange={(e) => handleInputTitleChange(product.id, e)}
                    value={product.title}
                  />
                </div>
                <div className="Calculator__Table__Row__Cell">
                  <input
                    className="Calculator__Input"
                    type="number"
                    onChange={(e) => handleInputPriceChange(product.id, e)}
                    value={product.price}
                  />
                </div>
              </div>
            ))}
            <div className="Calculator__Table__Row">
              <div className="Calculator__Table__Row__Cell">
                <button className="Button" onClick={addProduct}>
                  <img
                    className="Button__Icon"
                    src="/add.png"
                    alt="Lisa toode"
                  />
                  Lisa toode
                </button>
              </div>
              <div className="Calculator__Table__Row__Cell Calculator__Table__Row__Cell--text-right">
                {products.length > 1 && (
                  <button className="Button" onClick={deleteLastProduct}>
                    <img
                      className="Button__Icon"
                      src="/delete.png"
                      alt="Lisa toode"
                    />
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="Calculator__Aside">
            <span className="Calculator__Sum">{formatNumber(total)}</span>
            <button className="Button Button--big">Taotle sisustuslaenu</button>
            <br />
            <a href="https://www.lhv.ee/et/tingimused" target="_blank">
              Tutvu tingimustega
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Calculator;
