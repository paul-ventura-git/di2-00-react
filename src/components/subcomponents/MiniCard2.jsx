import React from 'react'
import myIllustration from '../../assets/img/web01.png'
import '../../assets/css/myStyles.css'

export default function MiniCard2() {
  return (
    <div class="card" style={{width: "15rem"}}>
      <div class="container">
        <div class="row">
          <div class="col" style={{minWidth:"40px"}}>
            <img id="myIllustration" src={myIllustration} alt=""></img>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Cambiarme a Claro</h5>
              <p class="card-text">Accede a un mundo de beneficios.</p>
              <button type="button" class="btn btn-danger">Danger</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
