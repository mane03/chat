import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import './App.scss';
import './bootstrap/grid.css'
import {useState} from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenSidebar = () => {
    setIsOpen(true)
  }

  const handleCloseSidebar = () => {
    setIsOpen(false)
  }

  return (
      <div className='chat'>
        <Sidebar isOpen={isOpen} />
        <Main
            handleOpenSidebar={handleOpenSidebar}
            handleCloseSidebar={handleCloseSidebar} />
      </div>
  );
}

export default App;
