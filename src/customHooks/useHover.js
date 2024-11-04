import { useState, useRef, useEffect } from 'react';

export function useHover () {
    const [hovered, setHovered] = useState(false); 
    const ref = useRef(null); 

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('mouseenter', handleMouseEnter);
            ref.current.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
            ref.current.removeEventListener('mouseenter', handleMouseEnter);
            ref.current.removeEventListener('mouseleave', handleMouseLeave);
          };
    }, []);

    return { hovered, ref };
}