import React from 'react'

export default function TableProducts() {
  return (
    <>
      <div className='container'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"># Id</th>
              <th scope="col">Nombre Producto</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col">Categoría</th>
              <th scope="col">Descuento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>    
    </>
  )
}
