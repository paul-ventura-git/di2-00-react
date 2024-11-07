import React from 'react'

export default function FormProducts() {
  return (
    <>
      <form onSubmit="">
        <div className="container"style={{marginTop: "20px", marginBottom: "20px"}}>
          <h1 className="text-center">Products register</h1>
          <div class="container">
            <div class="row">
              <div class="col">
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
              </div>
              <div class="col">
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
                <button onClick="" class="btn btn-warning" style={{marginTop:"30px"}}>Enviar</button>
              </div>
            </div>
          </div>    
        </div>
      </form>
    </>
  )
}
