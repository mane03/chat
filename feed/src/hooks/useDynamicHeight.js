import {useEffect} from "react";


const useDynamicHeight = (element, value) => {
    useEffect(() => {
        if(!element)

        element.current.style.height = "auto"
        element.current.style.height = element.current.scrollHeight + "px"
    }, [element, value])
}

export default useDynamicHeight