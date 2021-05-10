import React from "react";
import './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu'
import Select from './components/select'
import './App.css';
import Order from "./components/order/order";


function App() {
  return (
    <div>
      <div>
        <Select/>
        <Menu/>
      </div>
      <div>
        <Order/>
      </div>
    </div>
  );
}

export default App;
