import React from 'react';
import Notes from './components/notes.jsx';
// import './styles/App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
    <Notes />
   </div>
    
  );
}

export default App

