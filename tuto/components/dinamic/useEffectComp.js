import React, { useEffect, useState } from 'react';

export default function useEffectAdvancedPage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        console.log("aaa");
        setItems([])
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }
    }, []) // Only at window load, not every render

    
}