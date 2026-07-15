// src/App.js
import React, { Component } from 'react';

// Sub-component to display user greeting view [cite: 137]
function UserGreeting() {
  return <h1>Welcome back</h1>;
}

// Sub-component to display guest greeting view [cite: 138]
function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

// Greeting controller using conditional evaluation 
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Login trigger button handler element 
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout trigger button handler element 
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Main Flight Ticket Dashboard Container 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    // Utilizing an Element Variable to execute conditional structural assignment [cite: 124]
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    // Mock layout flight list available across states 
    const flightDetails = [
      { id: 1, flight: "AI-101", route: "Mumbai to New York", price: "Rs. 75,000" },
      { id: 2, flight: "EK-504", route: "Chennai to Dubai", price: "Rs. 32,000" }
    ];

    return (
      <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        {/* Render dynamic conditional layout header view [cite: 136] */}
        <Greeting isLoggedIn={isLoggedIn} />
        <div style={{ marginTop: '15px', marginBottom: '30px' }}>
          {button}
        </div>

        <hr />
        <h3>Available Flight Schedule Matrix</h3>
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th>Flight ID</th>
              <th>Route Connection</th>
              <th>Base Fare</th>
              <th>Action Authorization</th>
            </tr>
          </thead>
          <tbody>
            {flightDetails.map(item => (
              <tr key={item.id}>
                <td>{item.flight}</td>
                <td>{item.route}</td>
                <td>{item.price}</td>
                <td>
                  {/* Conditional element lock checking authentication value  */}
                  {isLoggedIn ? (
                    <button style={{ backgroundColor: 'orange', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
                      Book Ticket
                    </button>
                  ) : (
                    <span style={{ color: 'red', fontSize: '12px', fontStyle: 'italic' }}>
                      Login Required to Book
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;