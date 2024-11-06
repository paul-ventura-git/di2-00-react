import React from 'react'

export default function FormProducts() {
  return (
    <>
      <form onSubmit="">
        <div className="container"style={{marginTop: "20px", marginBottom: "20px"}}> 
          <h1>Products</h1>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Id: </label>
            <input type="text" class="form-control"></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre Producto: </label>
            <input type="text" class="form-control"></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Descripción: </label>
            <input type="text" class="form-control"></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Precio: </label>
            <input type="text" class="form-control"></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Stock: </label>
            <input type="text" class="form-control"></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Categoría: </label>
            <input type="text" class="form-control"></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Descuento: </label>
            <input type="text" class="form-control"></input>
          </div>
          <button onClick="" class="btn btn-warning">Enviar</button>
        </div>
      </form>
    </>
  )
}
