// src/CurrencyConverter.js
import React, { Component } from 'react';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rupees: '',
            euros: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ rupees: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault(); // Handles the submit click event flow [cite: 121]
        const inr = parseFloat(this.state.rupees);
        if (!isNaN(inr)) {
            const convertedEuro = inr * 0.011; // Basic currency mapping conversion calculation [cite: 120]
            this.setState({ euros: convertedEuro.toFixed(2) });
        } else {
            alert("Please enter a valid numeric value.");
        }
    }

    render() {
        return (
            <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px' }}>
                <h3>Currency Converter (INR to Euro) [cite: 120]</h3>
                <form onSubmit={this.handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Indian Rupees (INR): </label>
                        <input 
                            type="number" 
                            value={this.state.rupees} 
                            onChange={this.handleChange} 
                            placeholder="Enter amount in INR"
                        />
                    </div>
                    <button type="submit">Convert</button>
                </form>
                {this.state.euros && (
                    <h4 style={{ marginTop: '15px', color: 'green' }}>
                        Equivalent Amount: {this.state.euros} Euros (€)
                    </h4>
                )}
            </div>
        );
    }
}

export default CurrencyConverter;