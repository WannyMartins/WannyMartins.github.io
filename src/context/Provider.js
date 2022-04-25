import React, { useState } from 'react'
import MyContext from './MyContext'

function Provider({children}) {
  const [openMenu, setOpenMenu] = useState(false);

  
const context ={
  openMenu,
  setOpenMenu,
}

  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;