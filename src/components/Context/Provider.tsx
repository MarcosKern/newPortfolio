import { ReactElement, ReactNode, useState } from "react";
import myContext from "./Context";
type Props = {
    children: string | ReactNode
  }
  

export default function Provider({ children }: Props) {
    const [ renderWindow, setNewWindow ] = useState(Array<{
        identifier: number,
        render: ReactElement
      }>)

    return(
        <myContext.Provider value={ {renderWindow, setNewWindow} }>{ children }</myContext.Provider>
    )
}
