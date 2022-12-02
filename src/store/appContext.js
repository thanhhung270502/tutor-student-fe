import React, { createContext, useCallback, useState, useEffect } from 'react'

const AppContext = createContext({
    role: '',
    login: () => { },
    logout: () => { },
});

/*
role = 0: guest
role = 1: QL he thong
role = 2: QL chuyen mon
role = 3: GS
role = 4: Nguoi tim GS
*/

const AppContextProvider = ({ children }) => {
    const [role, setRole] = useState('2');

    const logout = () => {
        setRole('0');
        console.log(role);
    };

    const login = () => {
        // localStorage.setItem('role', role);
    }

    const contextValue = {
        role: role,
        login: login,
        logout: logout,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };