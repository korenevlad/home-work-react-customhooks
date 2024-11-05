import { useCallback, useState } from 'react';
import {useWindowEvent} from './useWindowEvent' 
export function useViewportSize () {
    const [sizes, setSizes] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    const setViewportSize = useCallback(() => {
        setSizes({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }, [])

    useWindowEvent("resize", setViewportSize)
    return sizes
}