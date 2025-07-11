
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-leaflet-icons.js'
import { useEffect, useState } from 'react';
import { Shop } from '../../models/Shops.js';



function Shops() {
  const [shops, setShops] = useState<Shop[] >([]);
  const url = "https://webshop-katre-default-rtdb.europe-west1.firebasedatabase.app/shops.json";

  useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(json => setShops(json || []))
      }, []);


  return (
    <div>
    <MapContainer className="map"  center={[59.416, 24.745]} zoom={12} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {shops.map(shop => 
  <Marker position={[shop.latitude, shop.longitude]}>
    <Popup>
      {shop.name}. <br /> Avatud {shop.openTime}.
    </Popup>
  </Marker>)}
</MapContainer>
    </div>
  )
}

export default Shops