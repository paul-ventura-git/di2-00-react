import React from 'react'

export default function ImageCard() {
  return (
    <div class="card" style={{width: "12rem"}}>
      <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <button type="button" class="btn btn-danger">Me interesa</button>
      </div>
    </div>
  )
}
