import React from 'react';

import Header from './components/Header';
import ColorPick from './components/ColorPick';

function App() {
  return (
    <div className="App">
      <Header />
      <ColorPick originalColor="#24ab32"/>
    </div>
  );
}

export default App;
