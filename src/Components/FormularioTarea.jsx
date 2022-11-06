import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { consultarAPI, crearTareaAPI} from './helpers/queries'
import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"
import Swal from "sweetalert2"


const FormularioTarea = () => {
const [tarea, setTarea] = useState([])

useEffect(() => {
    consultarAPI().then((respuesta) => {
      setTarea(respuesta);
    });
  }, []);

//validaciones
  const {register, handleSubmit, formState:{errors}, reset}=useForm({
    defaultValues:{
      nombreTarea:''
    }}
  );
  const onSubmit = (datos)=>{
    crearTareaAPI(datos).then((respuesta)=>{
      if(respuesta.status === 201){
       Swal.fire('Tarea Creada', 'La tarea fue creada correctamente', 'success')
       reset();
        consultarAPI().then((respuesta) => {
        setTarea(respuesta);
      });
      }else{
        Swal.fire('Ocurrio un error', 'Vuelva a intentarlo más tarde', 'error')
      }
    })

  }
  
 return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex" controlId="formBasic">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            // onChange={(e) => setTarea(e.target.value)}
            // value={tarea}
            {...register('nombreTarea', {
            required: 'Ingresar una tarea',                       
            minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
             },
            maxLength:{
            value: 150,
            message: 'Debe ingresar como máximo 150 caracteres'
           }})}
          />
          <Form.Text className="text-danger">
            {errors.nombreTarea?.message}
          </Form.Text>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>

      <ListaTarea tarea={tarea} setTarea={setTarea}></ListaTarea>
    </div>
  );
};

export default FormularioTarea;



/*
import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  // busco los datos del localStorage
  const tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareaKey')) || [];
  //aqui va la mayoria de la logica
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState(tareasLocalStorage);


// Ciclo de vida del componente (useEffect)
useEffect(()=>{
console.log('prueba de ciclo de vida del componente')
JSON.stringify(arregloTarea)
localStorage.setItem('arregloTareaKey', JSON.stringify(arregloTarea));
},[arregloTarea])

  const handleSubmit = (e) => {
    e.preventDefault();
    // arregloTarea.push no podemos usar el push con el state
    setArregloTarea([...arregloTarea, tarea]);
    //limpiar el input
    setTarea('');
  };
const borrarTarea = (nombre) =>{
  let arregloModificado = arregloTarea.filter((item)=>(item !== nombre ))
  // actualizo el state
  setArregloTarea(arregloModificado)
}
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>

      <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea} ></ListaTarea>
    </div>
  );
};

export default FormularioTarea;

*/