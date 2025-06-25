import { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  const [valitud, uuendaValitud] = useState("");

  const tootajad = [
    { nimi: "John Smith", ala: "Büroojuht", telefon: "+3456788" },
    { nimi: "Kalle Blomkvist", ala: "Tõlk", telefon: "+3456789" },
    { nimi: "Maali Maailm", ala: "Sekretär", telefon: "+3456790" },
    { nimi: "John Smith", ala: "Büroojuht", telefon: "+3456788" },
    { nimi: "Kalle Blomkvist", ala: "Tõlk", telefon: "+3456789" },
    { nimi: "Maali Maailm", ala: "Sekretär", telefon: "+3456790" },
  ];

  const v6taYhendust = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);
  };

  return (
    <div>
      <div>See on meist leht, nähtav aadressil localhost:5173/meist</div>
      <div>Meie töötajad:</div>
      <br />
      <div>
        {tootajad.map((tootaja, index) => (
          <div
            key={index}
            className={tootaja.nimi === valitud ? "valitud" : undefined}
          >
            <div>{tootaja.nimi}</div>
            <div>{tootaja.ala}</div>
            <button onClick={() => v6taYhendust(tootaja)}>Võta ühendust</button>
            <br /> <br />
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Meist;
