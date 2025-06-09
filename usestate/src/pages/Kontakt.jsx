import { useState } from 'react'

function Kontakt() {
    const [aadress, maaraAadress] = useState("Tallinn");
    const [telefon, maaraTelefon] =useState("55555555");
    const [email, maaraEmail] = useState("mail@mail.com");
    const [inglisKeelne, maaraIngliskeelne] = useState("ei");
   
    const ingliseks = () => {
        maaraAadress("London");
        maaraTelefon("+44 77000000");
        maaraEmail("hello@example.com");
        maaraIngliskeelne("jah");

    }
    


  return (
    <div>
        <div>{aadress}</div>
        <div>{telefon} </div>
        <div>{email} </div>
        <button onClick={ingliseks}>Muuda ingliskeelseks</button>
        { inglisKeelne === "jah" && <div>Leht on ingliskeelne</div> }
    </div>
  )
}

export default Kontakt