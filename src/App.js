import {Navbar, Sidebar} from './components'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages';

import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="wrappew">
        <div className="Container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Sidebar/> 
      </div>
    </div>
  );
}

export default App;
