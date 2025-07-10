import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__Support">
        <img className="" src="/contact.svg" alt="" width={42} />
        <div className="Footer__Support__Text">
          <h3>
            LHV <strong>Klienditugi</strong>
          </h3>
          <p>
            Kui sul tekib pangateenuse kasutamisel probleeme, saad klientitoe
            infotelefonilt abi ööpäev ringi.
          </p>
        </div>
      </div>

      <div className="Footer__Contact">
        <div className="Footer__Contact__Item Footer__Contact__Item--text-right">
          <img src="./phone-handle.png" width={24} height={24} alt="" />
          <span>6 800 400</span>
        </div>

        <div className="Footer__Contact__Item">
          <img src="./envelope.png" width={24} height={24} alt="" />
          <span>info@lhv.ee</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
