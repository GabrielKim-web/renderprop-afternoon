import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter';
import CurrencyDisplay from './Components/CurrencyDisplay'

class App extends Component {
  render() {
    return (
      <div id = "App">
        <CurrencyConverter 
        // render will return JSX
        render={(currencyData, amount) => {
          return (
            <CurrencyDisplay 
            currencyData={currencyData}
            amount={amount}/>
          )
        }}/>
      </div>
    );
  }
}

export default App;
