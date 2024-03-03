/* App.jsx */
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import HomePage from "./views/HomePage";

import NotFound from "./views/NotFound";
import PokemonPage from "./views/PokemonPage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemones" element={<PokemonPage />} />
        <Route path="/pokemones/:pokemonName" element={<PokemonPage />} />
  
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
