import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import './App.scss';
import './bootstrap/grid.css'

function App() {
  return (
      <div className='chat'>
        <Sidebar />
        <Main />
      </div>
  );
}

export default App;
