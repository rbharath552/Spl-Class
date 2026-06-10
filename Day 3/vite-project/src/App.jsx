import DarkModeToggle from "./components/DarkModeToggle"
import EmployeeRegistration from "./components/EmployeeRegistration"
import PreviousSearchTracker from "./components/PreviousSearchTracker"
import ProductSearchSystem from "./components/ProductSearchSystem"
import UserData from "./components/UserData"


const App = () => {
  return (
    <>
    <EmployeeRegistration/>
    <ProductSearchSystem/>
    <UserData/>
    <DarkModeToggle/>
    <PreviousSearchTracker/>
    </>
  )
}

export default App
