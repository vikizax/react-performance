import { useState, useEffect } from 'react'

const useIsMobile = (threshold: number = 805) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            if (window.innerWidth < threshold) setIsMobile(true);
            else setIsMobile(false);
        };
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return isMobile
}

export default useIsMobile