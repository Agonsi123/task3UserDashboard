import{createContext, useState} from 'react'

export const NavContext = createContext();

const Index = ({children}) => {
    const [activeTab, setActiveTab] = useState('register');
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <NavContext.Provider 
        value={{ 
            activeTab, setActiveTab, 
            isLoggedIn, setIsLoggedIn,
            }}
        >
            {children}
        </NavContext.Provider>
    );
}

export default Index