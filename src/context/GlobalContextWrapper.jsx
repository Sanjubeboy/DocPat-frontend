import { createContext, useContext, useState } from "react"

const GlobalContext = createContext()


export const useGlobalContext = () => {
    return useContext(GlobalContext)
}


const GlobalContextWrapper = ({children}) => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(true)

    const toggleSidebar = () => {
        setIsSideBarOpen(prev => !prev)
    }

    const globalProps = {
        toggleSidebar,
        isSideBarOpen
    }

  return (
    <GlobalContext.Provider value={globalProps}>
        {children}
    </GlobalContext.Provider>
  )
}
export default GlobalContextWrapper