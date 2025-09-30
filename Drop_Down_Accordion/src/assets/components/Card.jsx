import React, { useState } from 'react'
import './Card.css';

function Card({que, ans}) {

    const [show, setShow] = useState(false);

    function handelShow() {
        setShow(!show);
    }


  return (
    <div className='accordion_card'>
      <div className="card_header">
        <h2>{que}</h2>
        {show ? <button onClick={handelShow}>Remove</button> : <button onClick={handelShow}>Add</button>}
      </div>
      {show ? <div className="card_body">
        <p>{ans}</p>
      </div> : null}
    </div>
  )
}

export default Card
