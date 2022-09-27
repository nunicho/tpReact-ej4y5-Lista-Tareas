import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const FormularioTarea = ({addTarea}) => {
  // aquí va la mayoría de la lógica

  const [tarea, setTarea] = useState("Hola 123");
  const [arregloTarea, setArregloTarea] = useState([]);

const handleOnChange = (e) => {
  setTarea(e.currentTarget.value);
}

  const handleSubmit = (e) => {
    e.preventDefault();
  if (tarea.trim() !==''){
    addTarea(tarea);
    setTarea('');

  }
    setArregloTarea([...arregloTarea, tarea]);
    //limpiar el input
   
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={handleOnChange}
            value={tarea}
            
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTarea={arregloTarea}></ListaTarea>
    </div>
  );
};

export default FormularioTarea;
