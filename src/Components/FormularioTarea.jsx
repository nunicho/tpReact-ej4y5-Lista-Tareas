import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { consultarAPI} from './helpers/queries'
import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"


const FormularioTarea = () => {
  useState[tareas, setTareas] = useState([])


//validaciones
  const {register, handleSubmit, formState:{errors}}=useForm();
  const onSubmit = (datos)=>{
    console.log(datos)
    console.log('desde nuestra función submit')
  }
  
useEffect(()=>{
consultarAPI().then((respuesta)=>{
  setTareas(respuesta)


})
},[])


  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control/>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>

      <ListaTarea></ListaTarea>
    </div>
  );
};

export default FormularioTarea;