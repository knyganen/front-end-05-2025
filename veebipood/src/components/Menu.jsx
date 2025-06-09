import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      
    <Link to="/"><img className="pilt" src="https://www.bellaandduke.com/wp-content/uploads/2024/10/Border-collie-owners-dog-breed-guide-1.png" alt="" /></Link>
    <Link to="/ostukorv"><button className="nupp">Ostukorvi</button></Link>
    <Link to="/osta-kinkekaart"><button className="nupp">Kinkekaardid</button></Link>
    <Link to="/ostukorv"><button className="nupp">Ostukorv</button></Link>
    <Link to="/seaded"><button className="nupp">Seaded</button></Link>
    <Link to="/lisatoode"><button className="nupp">Lisatoode</button></Link>
    <Link to="/kalkulaator"><button className="nupp">Kalkulaator</button></Link>
    <Link to="/arrays-home"><button className="nupp">Arrays</button></Link>
    <Link to="/halda-home"><button className="nupp">Halda</button></Link>
    

    </div>
  )
}

export default Menu