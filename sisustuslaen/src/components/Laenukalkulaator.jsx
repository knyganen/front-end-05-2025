import { useRef, useState } from "react";

function LaenuKalkulaator() {
  const [products, setProducts] = useState([
    { id: 1, title: "Diivan", price: 500 },
    { id: 2, title: "Lamp", price: 85 },
  ]);

  const nameRef = useRef();
  const priceRef = useRef();

  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        title: nameRef.current.value,
        price: Number(priceRef.current.value),
      },
    ]);

    nameRef.current.value = "";
    priceRef.current.value = "";
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      <div className="intro-banner">
        <img className="intro-image" src="/img.png" alt="Diivan" />
        <div className="intro-text">
          <h3><strong>Kas sinu diivan on oma aja ära elanud?</strong></h3>
          <p>
            Oled väsinud segadusest, kus asjadel pole oma kohta. Oled  <br />
            unistanud lausa täiesti uuest sisekujundusest, aga kõik tundub <br />
            korraga liiga kallis? LHV sisustuslaenuga saad oma unistused ellu <br />
            viia juba täna.
          </p>
          <a href="#"><strong>Loe lisa </strong><img src="/arrow-down.png" className="arrow-icon" alt="" /></a>
        </div>
      </div>

      <div className="calculator">
        <h2>
          <strong>Koosta soovinimekiri</strong> ja vaata oma <br />
          uue sisustuse kuumakset
        </h2>

        <div className="rows">
          <div className="row header">
            <span>TOODE</span>
            <span>HIND</span>
            <span></span>
          </div>

          {products.map((product) => (
            <div className="row" key={product.id}>
              <span>{product.title}</span>
              <span>{product.price} </span>
              <span className="delete-button"></span>
              <button onClick={() => deleteProduct(product.id)}>
                <img src="/delete.png" alt="Kustuta" />
                
              </button>
            </div>
          ))}
        </div>

        <div className="add-product">
          <button className="add-button" onClick={addProduct}>
            <img src="/add.png" alt="Lisa toode" />Lisa toode</button>
        </div>

        <div className="total">
          <strong></strong> {total} €
        </div>

        <div className="apply-button">
          <a href="https://www.lhv.ee/et/kodulaen" target="_blank">
            <button>Taotle sisustuslaenu</button>
          </a>
          <a href="https://www.lhv.ee/et/tingimused" target="_blank">
            <button>Tutvu tingimustega</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default LaenuKalkulaator;
