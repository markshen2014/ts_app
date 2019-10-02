import React from 'react'
import { useLocalState } from '../hooks/Hooks'

const SecondFruit = () => {         
    const [ secondfruit , setSecondFruit ] = useLocalState('fruit');       
    return(
        
        <div>          
            <p>
                second fruit: {secondfruit}
            </p>
            <button onClick = { () => setSecondFruit('Apple') }> Apple </button>
            <button onClick = { () => setSecondFruit('Banana') }> Banana </button>
        </div>

    )

}

export default SecondFruit