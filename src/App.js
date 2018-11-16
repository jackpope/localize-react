import React, { Component } from 'react';
import ToggleLocalize from './toggle-localize'
import Select from './react-select';

class App extends Component {
  render() {
    const divStyle = { width: '50%', margin: '0 auto' };
    const spanStyle = {
      backgroundColor: 'gray',
      padding: '4px',
      borderRadius: '5px',
      color: 'white',
      boxShadow: '1px 1px 1px 1px lightgray'
    }

    return (
      <div style={divStyle}>
        <h1>Localize + React (using react-select)</h1>
        <ToggleLocalize/>
        <p>💥 turn on Localize and press <span style={spanStyle}>delete/backspace</span> in ↓select↓ to crash 💥</p>
        <Select />
      </div>
    );
  }
}

export default App;
