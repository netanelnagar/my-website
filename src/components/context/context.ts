import { createContext, useContext } from 'react';



interface MyAppContextValue {
    data: any;
    isError: boolean;
    isLoading: boolean;
}

export const MyAppContext = createContext<MyAppContextValue | null>(null);



export const useAppContext = () => {
    const context = useContext(MyAppContext)
    if (!context) {
        throw new Error('useAppContext must be used within a MyAppContextProvider')
    }
    return context;
}