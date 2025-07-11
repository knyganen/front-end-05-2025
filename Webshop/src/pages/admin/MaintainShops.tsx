import { useEffect, useState } from "react";
import { Shop } from "../../models/Shops";

function MaintainShops() {
  const url = "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
  const [shops, setShops] = useState<Shop[]>([]);
  const [shop, setShop] = useState<Shop>({name: "", latitude: 0, longitude: 0, openTime: ""});

  useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(json => setShops(json || []))
    }, []);

    const deleteShop = (index: number) => {
    shops.splice(index, 1);
    setShops(shops.slice());
    fetch(url, { method: "PUT", body: JSON.stringify(shops) });

    }

    const add = () => {
      shops.push(shop);
      setShops(shops.slice());
      fetch(url, { method: "PUT", body: JSON.stringify(shops) });
      setShop({name: "", latitude: 0, longitude: 0, openTime: ""});
    }

    return (
      <div>
        <div>Ajutiselt kuvan välja: {JSON.stringify(shop)} </div>
        <label>Shop name</label> <br />
        <input onChange={(e) => setShop({...shop, name: e.target.value})} value= {shop.name} type="text" /> <br />
        <label>Shop latitude</label> <br />
        <input onChange={(e) => setShop({...shop, latitude: Number(e.target.value)})} value={shop.latitude} type="number" /> <br />
        <label>Shop longitude</label> <br />
        <input onChange={(e) => setShop({...shop, longitude: Number(e.target.value)})} value={shop.longitude}  type="number" /> <br />
        <label>Shop open time</label> <br />
        <input onChange={(e) => setShop({...shop, openTime: e.target.value})} value={shop.openTime} type="text" /> <br />
        <button onClick={add}>Lisa</button>
        
        <div>Poode kokku: {shops.length} tk</div>
        {shops.map((shop, index) => 
          <div key={shop.name}>
            <div>{shop.name}</div>
            <div>{shop.latitude}</div>
            <div>{shop.longitude}</div>
            <div>{shop.openTime}</div>
            <button onClick={() => deleteShop(index)}>x</button>
          </div>
          )}
      </div>
    )
  }
  

export default MaintainShops