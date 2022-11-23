import React, { createContext } from 'react'

const AppContext = createContext({
    role: '',
});

/*
role = 0: guest
role = 1: QL he thong
role = 2: QL chuyen mon
role = 3: GS
role = 4: Nguoi tim GS
*/

const AppContextProvider = ({ children }) => {

    const contextValue = {
        role: '0',
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };