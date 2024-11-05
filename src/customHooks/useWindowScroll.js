import { useCallback, useState } from 'react'
import {useWindowEvent} from './useWindowEvent' 

export function useWindowScroll() {
    const [scroll, setScroll] = useState({
        x: window.scrollX,
        y: window.scrollY
    })

    const scrollTo = useCallback(({ x, y }) => {
        window.scrollTo({
            top: y,
            left: x,
            behavior: 'smooth'
          });
        setScroll({
            x: x,
            y: y
        })
    }, [])

    useWindowEvent("scroll", scrollTo)

    return [scroll, scrollTo]
}