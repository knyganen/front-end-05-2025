import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import KasutajaPostitus from "./KasutajaPostitus";


function Avaleht() {

const [postitused, uuendaPostitused] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => uuendaPostitused(data))
}, []);

  return ( <div>
    <div>See on avaleht, nähtav localhost: 5173 aadressil </div>
    <img src="https://hative.com/wp-content/uploads/2013/08/bark-news-media-logo.png" alt="" />
    {postitused.map(element => 
    <div key={element.id} >
    <div><i>{element.userId}</i></div>
    <div><u>{element.id}</u></div> 
    <div><b>{element.title}</b></div> 
    <div>{element.body}</div> 
    <Link to={"kasutaja-postitus/" + element.userId} ></Link>
    <button>Kõik kasutaja postitused</button>
    <Link to={"vaata-postitus/" + element.id} ></Link>
    <button>Kõik kasutaja postitused</button>
    </div>
    )}
       
</div>

)
}

  

export default Avaleht