import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioTarea from './Components/FormularioTarea';
import './App.css'



const App = () => {
  return (
    
    <Container className='containerPrincipal py-5'>
    <h1 className="display-4">Lista de tareas</h1> 
    <hr />
    <FormularioTarea>

    </FormularioTarea>
    </Container>
    
  );
};

export default App;
