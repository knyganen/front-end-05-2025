import { useState } from "react"
import { useRef } from "react"


function MaksimaalneKalkulaator() {
const [parastKohustusi, setParastKohustusi] = useState(0);
const [maxLimiit, setMaxLimiit] = useState(0);

const netoRef = useRef();
const kohustusedRef = useRef();
const ulalpeetavadRef = useRef();

const arvutaLimiit = () => {
    setParastKohustusi(
        Number(netoRef.current.value) - Number(kohustusedRef.current.value));

    setMaxLimiit(
            (Number(netoRef.current.value) - Number(kohustusedRef.current.value) - Number(ulalpeetavadRef.current.value) * 200) * 0.4
          );
}

  return (
    <div>
        <label>Ülalpeetavate arv</label> <br />
        <select defaultValue={0} onChange={arvutaLimiit} ref={ulalpeetavadRef}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select> <br />
        <label>Netosissetulek</label> <br />
        <input onChange={arvutaLimiit} ref={netoRef} type="text" /> <br />
        <label>Igakuised kohustused</label> <br />
        <input onChange={arvutaLimiit} ref={kohustusedRef} type="text" /> <br />
        <label>Sissetulek pärast kohustusi</label> <br />
        <input value= {parastKohustusi}  type="text" /> <br />
        <div>Maksimaalne pakutav limiit: {maxLimiit.toFixed(2)}  €</div>
        <br /><br />
    </div>
  )
}

export default MaksimaalneKalkulaator