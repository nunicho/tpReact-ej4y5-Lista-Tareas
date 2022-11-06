import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { consultarAPI, crearTareaAPI} from './helpers/queries'
import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"
import Swal from "sweetalert2"


const FormularioTarea = () => {
  useState[tareas, setTareas] = useState([])


//validaciones
  const {register, handleSubmit, formState:{errors}}=useForm({
    defaultValues:{
      nombreTarea:''
    }}
  );
  const onSubmit = (datos)=>{
    console.log(datos)
    //enviar los datos a la API
    crearTareaAPI(datos).then((respuesta)=>{
      if(respuesta.status === 201){
       Swal.fire('Tarea Creada', 'La tarea fue creada correctamente', 'success')

      }else{
        Swal.fire('Ocurrio un error', 'Vuelva a intentarlo más tarde', 'error')
      }
    })

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
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            // onChange={(e) => setTarea(e.target.value)}
            // value={tarea}
            {...register('nombreTarea', {
              required: 'Debe ingresar la tarea',                       
             minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
             },
            maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 20 caracteres'
           }})}
          />
          <Form.Text className="mb-3" controlID="formTarea">
            {errors.nombreTarea?.message}
          </Form.Text>
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