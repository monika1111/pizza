import React from 'react';
import Header from "./components/Header/Header";
import PizzasList from "./components/PizzasList/PizzasList";
import Basket from "./components/Basket/Basket";

function App() {
  return (
    <div className="App">
        <Header/>
        <Basket/>
        <PizzasList/>
    </div>
  );
}

export default App;
