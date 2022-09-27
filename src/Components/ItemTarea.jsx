import {ListGroup, Button} from "react-bootstrap";

const ItemTarea = () => {
    return (
        <div>
        <ListGroup.Item className="d-flex justify-content-between">
            <Button variant="danger">Borrar</Button>
            </ListGroup.Item> 
        </div>
    );
};

export default ItemTarea;