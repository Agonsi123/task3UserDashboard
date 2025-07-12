import{createContext, useState} from 'react'

export const NavContext = createContext();

const Index = ({children}) => {
    const [activeTab, setActiveTab] = useState('register');

    return (
        <NavContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </NavContext.Provider>
    );
}

export default Index