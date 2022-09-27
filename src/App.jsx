import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioTarea from './Components/FormularioTarea';



const App = () => {

const addTarea = () =>{
console.log('newTarea', newTarea)
let newItem = { task: newTarea};

}

  return (
    
    <Container className='my-5'>
    <h1 className="display-4">Lista de tareas</h1> 
    <hr />
    <FormularioTarea addTarea={addTarea}>

    </FormularioTarea>
    </Container>
    
  );
};

export default App;
