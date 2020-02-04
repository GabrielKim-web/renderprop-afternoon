import React, {Component} from 'react';

class CurrencyConverter extends Component {
   constructor() {
      super();

      this.state = {
         currencyChosen: false,
         selectedCurrency: 'Select Currency',
         amount: 0
      }
   }

   handleAmountIncrease = () => {
      //prevState might be good for undo...
      this.setState(prevState => {
         return (
            {amount: prevState.amount + 1}
         )
      })
   }

   handleAmountDecrease = () => {
      // Black Diamond; idiot-proofing
      if (this.state.amount <= 0) {
         return null;
      } else {
         this.setState(prevState => {
            return (
               {amount: prevState.amount - 1}
            )
         })
      }
   }


   handleOptionSelect = e => {
      const userValue = e.target.value;
      this.setState(() => {
         return (
            {
               selectedCurrency: userValue,
               currencyChosen: userValue === 'Select Currency' ? false : true
            }
         )
      })
   }
   
   render() {
      const currencyData = [
         { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
         { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
         { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
         { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
         { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
      ]
      const currencyOptions = currencyData.map((element, index) => {
         return (
            <option key={index} value={index}>
               {element.name}
            </option>
         )
      })
      return(
         <div id="CurrencyConverter">
            <select value={this.state.selectedCurrency} onChange={this.handleOptionSelect}>
               <option value='Select Currency'>Select Currency</option>
               {currencyOptions}
            </select>
            {this.state.selectedCurrency === "Select Currency" ? 
               <h1>Please Select Currency</h1>
            : <div>
                  {/* instead of methods like I normally do, they are arrow methods; it still doesn't change how they are referenced. */}
                  <button className="add" onClick={this.handleAmountIncrease}>+</button>
                  <button className="minus" onClick={this.handleAmountDecrease}>-</button>
                  {this.props.render(currencyData[this.state.selectedCurrency], this.state.amount)}
               </div>} 
         </div>
      )
   }
}

export default CurrencyConverter;