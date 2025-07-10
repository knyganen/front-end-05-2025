import "./Teaser.css";

function Teaser() {
  return (
    <>
      <div className="Teaser Teaser__Mobile">
        <h3>
          <strong>Sisustuslaen</strong>
        </h3>
        <div className="Teaser__Text">
          <p>Kas sinu diivan on oma aja ära elanud?</p>
        </div>
      </div>

      <div className="Teaser Teaser__Desktop">
        <img className="Teaser__Image" src="/img.png" alt="Diivan" />
        <div className="Teaser__Text">
          <h3>
            <strong>Kas sinu diivan on oma aja ära elanud?</strong>
          </h3>
          <p>
            Oled väsinud segadusest, kus asjadel pole oma kohta. Oled unistanud
            lausa täiesti uuest sisekujundusest, aga kõik tundub korraga liiga
            kallis? LHV sisustuslaenuga saad oma unistused ellu viia juba täna.
            <br />
            <br />
            <a href="#">
              <strong>Loe lisa </strong>
              <img src="/arrow-down.png" className="arrow-icon" alt="" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Teaser;
