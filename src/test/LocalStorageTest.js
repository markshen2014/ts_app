import React from 'react'
import { useLocalState } from '../hooks/Hooks'
import SecondFruit from './SecondFruit'

const LocalStorage = () => {    
      
    const [ fruit , setFruit ] = useLocalState('fruit');   
    
    return(
        
        <div>
            <p>
                fruit: {fruit}
            </p>
            <button onClick = { () => setFruit('Apple') }> Apple </button>
            <button onClick = { () => setFruit('Banana') }> Banana </button>

            <SecondFruit />
        </div>

    )

}

export default LocalStorage