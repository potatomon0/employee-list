import {useState, createContext} from 'react';
export const AppContext = createContext();

const AppContextProvider = (props)=>{
    const [employee, setEmployee] = useState([]);
    return(
        <AppContext.Provider value={{employee,setEmployee}}>
            {props.children}
            </AppContext.Provider>
    )
}

export default AppContextProvider