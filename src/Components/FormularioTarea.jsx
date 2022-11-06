import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { consultarAPI} from './helpers/queries'
import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"


const FormularioTarea = () => {
  useState[tareas, setTareas] = useState([])


  
useEffect(()=>{
consultarAPI().then((respuesta)=>{
  setTareas(respuesta)


})
},[])


  return (
    <div>
      <Form>
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