import React from 'react'
import ImageCard from './subcomponents/ImageCard'
import '../assets/css/myStyles.css'

export default function R04Ofertas() {
  return (
    <div class="container myMargins">
      <div class="row">
        <div class="col">
          <ImageCard />
        </div>
        <div class="col">
          <ImageCard />
        </div>
        <div class="col">
          <ImageCard />
        </div>
        <div class="col">
          <ImageCard />
        </div>
      </div>
    </div>
  )
}
