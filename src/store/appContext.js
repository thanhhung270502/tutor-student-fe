import React, { createContext, useState } from 'react'

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
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const [role, setRole] = useState(getCookie("role"));

    const contextValue = {
        role: role,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };