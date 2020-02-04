import React from 'react';

let CurrencyDisplay = (props) => {
   return (
      <p>USD{props.amount} equals {props.currencyData.symbol}{props.currencyData.rate * props.amount} {props.currencyData.name}</p>
   )
}

export default CurrencyDisplay;