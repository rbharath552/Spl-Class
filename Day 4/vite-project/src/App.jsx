import CartTotal from "./components/CartTotal"
import EmployeeSalaryFilter from "./components/EmployeeSalaryFilter"
import FindUser from "./components/FindUser"
import Orders from "./components/Orders"
import ProductCardRendering from "./components/ProductCardRendering"
import StudentManagementSystem from "./components/StudentManagementSystem"


const App = () => {
  return (
    <>
    <EmployeeSalaryFilter/>
    <FindUser/>
    <ProductCardRendering/>
    <CartTotal/>
    <StudentManagementSystem/>
    <Orders/>
    </>
  )
}

export default App
