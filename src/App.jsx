import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import EmpleadoList from "./components/EmpleadoList";

function App() {


  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 className="text-center">Lista Empleados</h1>
      <hr />
      <EmpleadoList></EmpleadoList>
    </Container>
  );
}

export default App;
