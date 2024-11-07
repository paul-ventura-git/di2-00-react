import React from 'react'
import MiniCard from './subcomponents/MiniCard'
import '../assets/css/myStyles.css'

export default function R03Cards() {
  return (
    <div class="container myMargins">
      <div class="row">
        <div class="col">
          <MiniCard></MiniCard>
        </div>
        <div class="col">
          <MiniCard></MiniCard>
        </div>
        <div class="col">
          <MiniCard></MiniCard>
        </div>
        <div class="col">
          <MiniCard></MiniCard>
        </div>
        <div class="col">
          <MiniCard></MiniCard>
        </div>
      </div>
    </div>
  )
}
