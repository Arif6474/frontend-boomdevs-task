import { Outlet } from "react-router-dom"


function Products() {
  return (
    <div className="flex  gap-4">
      <h1 className="text-2xl font-bold m-4 dark:text-white">Products Page</h1>
      <Outlet /> 
    </div>
  )
}

export default Products