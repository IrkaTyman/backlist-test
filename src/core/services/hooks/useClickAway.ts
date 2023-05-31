import {useState, useEffect} from 'react'

// Хук, регистрирующий нажатие вне переданных refs
export function useClickAway(refs: any[], onAwayClick: () => void) {
    // Активен ли элемент
    const [active, setActive] = useState(false)
    // вешаю обработчик
    useEffect(() => {
        window.addEventListener('mousedown', checkClickAway)
        return () => window.removeEventListener('mousedown', checkClickAway)
    }, [refs])

    //Ф-ция, регистрирующая клик
    function checkClickAway(event: any) {
        let path = event.composedPath()
        //Если клик не попал ни на один элемент refs, то true
        let isClickAway = refs.every(ref => !path.includes(ref))
        if (isClickAway && active) {
            onAwayClick()
            setActive(false)
        }
    }

    return {active, setActive}
}