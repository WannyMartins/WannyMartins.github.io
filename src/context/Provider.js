import React, { useState } from 'react'
import MyContext from './MyContext'

function Provider({children}) {
  const [active, setActive] = useState(false);

  
const context ={
  active, setActive
}

  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;