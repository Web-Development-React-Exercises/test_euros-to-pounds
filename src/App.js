import './App.css';
import { useState } from 'react';

function App() {

  const [euros, setEuros] = useState ();
  const [pounds, setPounds] = useState (0);

  function handleSubmit(e) {
    e.preventDefault();
    const result = euros * 0.86;
    setPounds(result);
  }

  return (
    <div id="content">
      <h3>Currency converter</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Euros</label>
          <input type="number" value={euros} onChange={e => setEuros(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Pounds</label>
          <output>{pounds}</output>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
