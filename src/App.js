import { BrowserRouter,Route,Routes } from "react-router-dom";
import "../src/App.css"
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/details/:poke" element={<PokemonDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
