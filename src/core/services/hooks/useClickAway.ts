import {useState, useEffect} from 'react'

/** Hook for catching miss clicks. */
export function useClickAway(refs: any[], onAwayClick: () => void) {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        window.addEventListener('mousedown', checkClickAway)
        return () => window.removeEventListener('mousedown', checkClickAway)
    }, [refs])

    /** Check click for miss. */
    function checkClickAway(event: any) {
        let path = event.composedPath()
        let isClickAway = refs.every(ref => !path.includes(ref))
        if (isClickAway && isActive) {
            onAwayClick()
            setIsActive(false)
        }
    }

    return {

        /** Is active (didn't miss click). */
        isActive,

        /** Set isActive. */
        setIsActive,
    }
}