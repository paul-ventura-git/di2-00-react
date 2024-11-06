import React from 'react'

export default function CardCustomers(props) {


  return (
    <>
      <div className="container">
        <div id="miTarjeta" class="card" style={{width: "18rem"}}>
          <img src="https://picsum.photos/500/400" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{props.cardUsername}</h5>
            <p class="card-text">{props.cardAge}</p>
            <a href="#" onClick={''} class="btn btn-primary">Cambiar color</a>
          </div>
        </div>
      </div>
    </>
  )
}
