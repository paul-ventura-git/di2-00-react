import React from 'react'
import MiniCard2 from './subcomponents/MiniCard2'
import '../assets/css/myStyles.css'

export default function R06MasPedidos() {
  return (
    <div className='r06'>
      <div className='container myMargins'>
        <nav>
          <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-tienda-tab" data-bs-toggle="tab" data-bs-target="#nav-tienda" type="button" role="tab" aria-controls="nav-tienda" aria-selected="true">Tienda Claro</button>
            <button class="nav-link" id="nav-promociones-tab" data-bs-toggle="tab" data-bs-target="#nav-promociones" type="button" role="tab" aria-controls="nav-promociones" aria-selected="false">Promociones</button>
            <button class="nav-link" id="nav-liberados-tab" data-bs-toggle="tab" data-bs-target="#nav-liberados" type="button" role="tab" aria-controls="nav-liberados" aria-selected="false">Celulares liberados</button>
          </div>
        </nav>
        <div class="tab-content myMargins" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-tienda" role="tabpanel" aria-labelledby="nav-tienda-tab">
            <div class="container">
              <div class="row">
                <div class="col">
                  <MiniCard2 />
                </div>
                <div class="col">
                  <MiniCard2 />
                </div>
                <div class="col">
                  <MiniCard2 />
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-promociones" role="tabpanel" aria-labelledby="nav-promociones-tab">
            <div class="container">
              <div class="row">
                <div class="col">
                  <MiniCard2 />
                </div>
                <div class="col">
                  <MiniCard2 />
                </div>
                <div class="col">
                  <MiniCard2 />
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-liberados" role="tabpanel" aria-labelledby="nav-liberados-tab">
            <div class="container">
              <div class="row">
                <div class="col">
                  <MiniCard2 />
                </div>
                <div class="col">
                  <MiniCard2 />
                </div>
                <div class="col">
                  <MiniCard2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
