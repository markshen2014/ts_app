import React from 'react'
import useGlobal from "../store";

export const StateTest = () => {
   
    const [globalState, globalActions] = useGlobal();

    return(
    <div>
        <p>
        {globalState.name}
        </p>
        <p>
            <button type="button"
            onClick={() => globalActions.setData("name", "mark")}>
                change name1
            </button>
        </p>
        <p>
            <button type="button"
            onClick={() => globalActions.setData("name", "Lorne")}>
                change name2 
            </button>
        </p>
        
       
    
    </div>

  )

}