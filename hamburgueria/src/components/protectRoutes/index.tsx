import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userContext } from "../../contexts/userContext"

export function ProtectRoutes() {
  const { products, loading } = useContext(userContext)

  if (loading) {
    return null
  }

  return products.length > 0 ? <Outlet /> : <Navigate to="/login" />
}