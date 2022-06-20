import { Button } from '@chakra-ui/core';
import { useEffect, useState } from 'react';


export function Async() {
    const [isButtonVisible, setButtonVisible] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setButtonVisible(true)

        }, 1000)
    }, [])

    return (
        <div>
            <div>Hellow World</div>
            { isButtonVisible && <button>Button</button> }
        </div>
    )
}