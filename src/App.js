import React from 'react';
import './App.css';
import Dessert from './Components/Dessert';


function App() {
  return (
    <div className="container">
      <div className="card my-5">
        <div className="card-header bg-dark text-light">Desserts App</div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Menu:</li>
            <Dessert name="Ice Cream Sunday" price="4.50" />
            <Dessert name="Tiramasu" price="6.25" />
            <Dessert name="Cheesecake" price="7.00" />
            <Dessert name="Haagen Dazs Caramel Cone" price="7.00" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
