//this is the context provvider,and it is a wrapper function which will help us to provide the cotext data
//children props is a special prop which is used generally in wrapper function.
//in wrapper function children props helps them to wrap around the other components.

import React from 'react'
import DataContext from './DataContext'
export default  function ContextProvider({children}) {
  return (
    <DataContext.Provider>
        {children}
        </DataContext.Provider>
  )
}

export default ContextProvider