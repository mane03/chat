import React, {useState} from 'react';
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";


function Chat() {
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

export default Chat;