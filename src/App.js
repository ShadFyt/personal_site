import './App.css';
import { BrowserRouter } from "react-router-dom";

import Main from './components/main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>

  );
}

export default App;
