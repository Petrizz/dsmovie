import {
  BrowserRouter,
  Routes, //esses componentes que servem para confgurar as rotas
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "componentes/Navbar";

function App() {
  //<BrowserRouter>inicia a configuração das rotas
  //<Routes> ele configura rota por rota
  //Route manipula os aquivos que vão ser abertos e com quais atributos são necessario pra isso ex /form tem outro route com path para passa o id
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> ele configura rota por rota
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
