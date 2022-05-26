
import './App.css';
import React, { useState } from 'react';
import {useLocalStorage} from "./useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage('name', 'Bob');

  return (
    <input
    type={'text'}
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
  );
}

export default App;
