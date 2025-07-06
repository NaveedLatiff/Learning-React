import React, { createContext } from 'react'
export let DataContext=createContext()

const Context = (props) => {

    let sharingData="33";
    return (
    <div>
    <DataContext.Provider value={sharingData}>
        {props.children}
    </DataContext.Provider>
    </div>
  )
}

export default Context
