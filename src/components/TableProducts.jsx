import React from 'react'
import { getList } from '../services/productsList' 
import { useState, useEffect } from 'react'
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';

export default function TableProducts() {

  const [ arrayDeObjetos, setArrayDeObjetos ] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setArrayDeObjetos(items)
        }
      })
    return () => mounted = false;
  }, [])

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
              <th scope="col" styles={{minWidth:"300px"}}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {
              arrayDeObjetos.map((item) => {
                return(
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.category}</td>
                    <td>{item.discountPercentage}</td>
                    <td styles={{minWidth:"300px"}}>
                        <div class="row">
                          <div class="col">
                            <div><FaEye /></div>
                          </div>
                          <div class="col">
                            <div><FaPencilAlt /></div>
                          </div>
                          <div class="col">
                            <div><FaTrash /></div>
                          </div>
                        </div>
                    </td>
                  </tr>
                )
              })
            }


          </tbody>
        </table>
      </div>    
    </>
  )
}
