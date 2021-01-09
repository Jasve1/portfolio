import { useState } from 'react';

const useStopScroll = () => {
    const [ycoord, setYcoord] = useState(0);

    const changeScroll = (stopScroll) => {
        if (stopScroll) {
            const newYCoord = window.scrollY;
            document.body.setAttribute('style', `top: ${-newYCoord}px;`);
            document.body.classList.add('no-scroll');
            setYcoord(newYCoord);
        } else {
            document.body.classList.remove('no-scroll');
            document.body.removeAttribute('style');
            window.scrollBy({
                top: ycoord,
                left: 0,
                behavior: 'auto'
            })
        }
    };

    return { changeScroll };
};

export default useStopScroll;
