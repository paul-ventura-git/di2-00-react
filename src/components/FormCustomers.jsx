import React from 'react'
import CardCustomers from './CardCustomers'
import { useState } from 'react'

export default function FormCustomers() {
  const [inputs, setInputs] = useState({});
  const [nombreFinal, setNombreFinal] = useState("");
  const [edadFinal, setEdadFinal] = useState("");
  const [colorFinal, setColorFinal] = useState("");

  const handleChange = (event) => {
    const v_name = event.target.name;
    const v_value = event.target.value;
    setInputs(values => ({...values, [v_name]: v_value})); 
    console.log(inputs);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //Que envie los datos al card
    setNombreFinal(inputs.username);
    setEdadFinal(inputs.age);
    setColorFinal(inputs.color);
    console.log(inputs);
    inputs.username='';
    inputs.age='';
    inputs.color='';
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container"style={{marginTop: "20px", marginBottom: "20px"}}> 
          <h1>Customers</h1>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre: </label>
            <input 
              type="text" 
              class="form-control"
              name="username"
              value={inputs.username || ""} // {username: "<value>"}
              onChange={handleChange}
            ></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Edad: </label>
            <input 
              type="text" 
              class="form-control"
              name='age'
              value={inputs.age || ""} //const inputs = {username: <value>, age: <value>}
              onChange={handleChange}
            ></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Color: </label>
            <input 
              type="text" 
              class="form-control"
              name="color"
              value={inputs.color || ""} // {username: "<value>"}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" class="btn btn-warning">Enviar</button>
        </div>
      </form>
      <CardCustomers cardUsername={nombreFinal} cardAge={edadFinal} cardColor={colorFinal}/>
    </>
  )
}
