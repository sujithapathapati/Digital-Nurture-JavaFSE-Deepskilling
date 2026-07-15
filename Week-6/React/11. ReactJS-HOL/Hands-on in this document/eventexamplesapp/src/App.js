// src/App.js
import React, { Component } from 'react';
import CurrencyConverter from './CurrencyConverter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
  }

  handleDecrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 })); // Decrement logic [cite: 114]
  }

  incrementCounter() {
    this.setState(prevState => ({ counter: prevState.counter + 1 })); // Increment logic [cite: 114]
  }

  sayHello() {
    alert("Hello! This is a static message."); // Say hello followed by static message [cite: 117]
  }

  // Invokes multiple methods sequentially [cite: 115]
  handleIncreaseClick() {
    this.incrementCounter(); // Method 1 [cite: 116]
    this.sayHello();         // Method 2 [cite: 117]
  }

  sayWelcome(msg) {
    alert(`Message parameter: ${msg}`); // Takes dynamic argument [cite: 118]
  }

  handleSyntheticClick(e) {
    alert("I was clicked"); // Displays confirmation statement [cite: 119]
  }

  render() {
    return (
      <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h2>React Event Examples App </h2>
        <hr />

        <div style={{ margin: '20px 0' }}>
          <h3>Counter Value: {this.state.counter}</h3>
          <button onClick={this.handleIncreaseClick} style={{ marginRight: '10px' }}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
        
        <div style={{ margin: '20px 0' }}>
          <h3>Arguments Event</h3>
          <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button> {/* Pass welcome as argument [cite: 118] */}
        </div>

        <div style={{ margin: '20px 0' }}>
          <h3>Synthetic Event</h3>
          <button onClick={(e) => this.handleSyntheticClick(e)}>Trigger Event</button> {/* Synthetic click trigger [cite: 119] */}
        </div>

        <CurrencyConverter />
      </div>
    );
  }
}

export default App;