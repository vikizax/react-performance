import { SetStateAction, createContext, Dispatch } from 'react';

export type TabContextType = {
    currentTab: number;
    setCurrentTab: Dispatch<SetStateAction<number>>
}

export const TabContext = createContext<TabContextType>({
    currentTab: 0,
    setCurrentTab: () => { }
});

export type TabContextWrapperParams = {
    children: JSX.Element
}

export const TabContextWrapper = ({ children }: TabContextWrapperParams) => {
    
}

