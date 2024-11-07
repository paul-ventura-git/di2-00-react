import React from 'react'
import PlanesCard from './subcomponents/PlanesCard'
import '../assets/css/myStyles.css'

export default function R05Tabs() {
  return (
    <>
      <div className='container myMargins'>
        <nav>
          <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-hogar-tab" data-bs-toggle="tab" data-bs-target="#nav-hogar" type="button" role="tab" aria-controls="nav-hogar" aria-selected="true">Planes Hogar</button>
            <button class="nav-link" id="nav-ilimitados-tab" data-bs-toggle="tab" data-bs-target="#nav-ilimitados" type="button" role="tab" aria-controls="nav-ilimitados" aria-selected="false">Planes Móviles Ilimitados</button>
          </div>
        </nav>
        <div class="tab-content myMargins" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-hogar" role="tabpanel" aria-labelledby="nav-hogar-tab">
            <div class="container">
              <div class="row">
                <div class="col">
                  <PlanesCard />
                </div>
                <div class="col">
                  <PlanesCard />
                </div>
                <div class="col">
                  <PlanesCard />
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-ilimitados" role="tabpanel" aria-labelledby="nav-ilimitados-tab">
            <div class="container">
              <div class="row">
                <div class="col">
                  <PlanesCard />
                </div>
                <div class="col">
                  <PlanesCard />
                </div>
                <div class="col">
                  <PlanesCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
