import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

const ComponentWithContext = () => {
  const { theme, changeTheme } = useContext(AppContext)
  return (
    <>
      <div>{ theme }</div>
      <button onClick={changeTheme}>Change</button>
    </>
  )
}

export default ComponentWithContext
