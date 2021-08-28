import React, {useContext, createContext, useState} from 'react';
import { useMediaQuery } from '@material-ui/core';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) =>{
    // states
    const [openDrawer, setOpenDrawer] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    // responsive functions
    const checkSize = useMediaQuery('(max-width:700px)');
    const extraSmall = useMediaQuery('(max-width:375px)');
    const checkSizeMid = useMediaQuery('(max-width:960px)');

    // drawer functions
    const openDrawerFunc = ()=>{
        setOpenDrawer(true);
    }
    const closeDrawerFunc = ()=>{
        setOpenDrawer(false);
    }
    // dark mode functions
    const darkModeActive = ()=>{
        setDarkMode(true);
    }
    const lightModeActive = ()=>{
        setDarkMode(false);
    }
    return (
        <GlobalContext.Provider value={{
            //states
            openDrawer,
            darkMode,
            //responsive,
            checkSize,
            checkSizeMid,
            extraSmall,

            // functions
            openDrawerFunc,
            closeDrawerFunc,
            darkModeActive,
            lightModeActive,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(GlobalContext);
}

// extras 
// responsive 

    // React.useEffect(()=>{
    //     const sizeHandler = ()=>{
    //         setCheckSize(testing.matches);
    //     }
    //     const testing = window.matchMedia("(max-width: 700px)");
    //     testing.addEventListener("change", sizeHandler);
    //     return ()=>{
    //         testing.removeEventListener('change', sizeHandler);
    //     };
    // },[]);


