import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavigator from "./components/AppNavigator";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator />
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
