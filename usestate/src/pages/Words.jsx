import { useState } from 'react'

function Words() {
    const [words, setWords] = useState (["spray", "elite", "exuberant", "destruction", "present"]);


  return (

    <div>
        <button onClick={() => setWords([])} >Tühjenda</button>
      <div>Kirjas on {words.length} sõna</div>
      <br />
      
      {words.length === 0 && <div>Sõnu pole</div> }  
      {words.map((words, index) => <div key={index}>{words}</div>)}
      
        
    <br /> <br />
    <div>Sõnu kokku: {words.length} sõna</div>
    </div>



  )
}

export default Words