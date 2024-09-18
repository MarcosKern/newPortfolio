import { ContextType, createContext } from 'react';

const myContext = createContext<ContextType<any> | any>(undefined);

export default myContext;