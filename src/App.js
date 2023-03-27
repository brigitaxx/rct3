import logo from './logo.svg';
import './App.css';
import { TextField } from '@mui/material';
import Dolist from './componets/Dolist';
import Validation from './componets/Validation';
import Simple from './componets/Simple';

function App() {
  return (
    <div className="App">
      {/* <Dolist/> */}
      <Validation/>
      <Simple/>
      
    </div>
  );
}

export default App;
