import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Menu() {
  const { t, i18n } = useTranslation();
  
  const muudaKeelEN = () => {
    i18n.changeLanguage("en");
    //localStorage-sse salvestamiseks: võti + väärtus
    //localStorage-t näen: parem klõps -> inspect -> application (Chrome)
    localStorage.setItem("keel", "en");
  }

  const muudaKeelET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel", "et");
  }

  return (
    <div>
      <button onClick={muudaKeelEN}>English</button>
      <button onClick={muudaKeelET} >Eesti</button>
      
    <Link to="/"><img className="pilt" src="https://www.bellaandduke.com/wp-content/uploads/2024/10/Border-collie-owners-dog-breed-guide-1.png" alt="" /></Link>
    <Link to="/ostukorv"><button className="nupp">{t('nav.cart')}</button></Link>
    <Link to="/osta-kinkekaart"><button className="nupp">{t('nav.giftcards')}</button></Link>
    <Link to="/seaded"><button className="nupp">{t('nav.settings')}</button></Link>
    <Link to="/lisatoode"><button className="nupp">{t('nav.add-product')}</button></Link>
    <Link to="/kalkulaator"><button className="nupp">{t('nav.calculator')}</button></Link>
    <Link to="/arrays-home"><button className="nupp">Arrays</button></Link>
    <Link to="/halda-home"><button className="nupp">Halda</button></Link>
    

    </div>
  )
}

export default Menu