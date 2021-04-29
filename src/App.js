import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import './App.scss';
import './bootstrap/grid.css'
import {useState} from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  // const [width, setWidth] = useState(0)
  // let style = {width: width}

  const handleOpenSidebar = () => {
    setIsOpen(!isOpen)
    // setWidth(250)
  }

  return (
      <div className='chat'>
        <Sidebar isOpen={isOpen} />
        <Main handleOpenSidebar={handleOpenSidebar} />
      </div>
  );
}

export default App;
