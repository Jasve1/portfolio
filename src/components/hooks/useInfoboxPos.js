import { useState } from "react";

const useInfoboxPos = () => {
    const [view, setView] = useState("");

    const changePosition = (e) => {
        const targetPos = e.target.getBoundingClientRect();
        const x = targetPos.x;
        const y = targetPos.y
        const borderX = window.innerWidth / 2;
        const borderY = window.innerHeight / 2;
        switch(true){
            case x <= borderX && y <= borderY:
                setView("bottom-right")
                break;
            case x > borderX && y <= borderY:
                setView("bottom-left")
                break;
            case x <= borderX && y > borderY:
                setView("top-right")
                break;
            case x > borderX && y > borderY:
                setView("top-left")
                break;
            default:
                return;
        }
    };

    return {
        view,
        changePosition
    };
};

export default useInfoboxPos;
