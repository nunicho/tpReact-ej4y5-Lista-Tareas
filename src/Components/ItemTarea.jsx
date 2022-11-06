import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarTareaAPI, consultarAPI } from "./helpers/queries";

const ItemTarea = ({tarea, setTarea}) => {

const borrarTarea = () => {
    Swal.fire({
      title: "¿Está seguro de eliminar la tarea?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarTareaAPI(tarea._id).then((respuesta) => {
          if (respuesta.status === 200) {
            consultarAPI().then((respuesta) => {
              setTarea(respuesta);
            });

            Swal.fire(
              "La tarea ha sido eliminada",
              "Tu tarea fue quitada de la lista",
              "success"
            );
          } else {
            Swal.fire(
              "Ha habido un error",
              "Pruebe nuevamente luego.",
              "error"
            );
          }
        });
      }
    });
  };


    return (
        <ListGroup.Item className="d-flex justify-content-between overflow-auto">
            {tarea.nombreTarea}
            <Button variant="danger" onClick={borrarTarea}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;