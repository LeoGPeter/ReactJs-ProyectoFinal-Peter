import {BrowserRouter, Routes, Route} from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import { CartWidget } from "./components/CartWidget";
import { Cart } from "./components/Cart";

import "./App.css"
import { CartProvider } from "./contexts/CartCotext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element= {<ItemListContainer/>} />
            <Route path="/category/:id" element= {<ItemListContainer/>} />
            <Route path="/item/:id" element= {<ItemDetailsContainer/>} />
            <Route path="/Cart" element= {<Cart/>} />
            <Route path="*" element= {<>404</>} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
