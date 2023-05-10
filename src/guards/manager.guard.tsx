import { routesTypes } from 'models'
import { Navigate, Outlet } from 'react-router-dom'

export const ManagerGuard = () => {
  const tempVar = true

  return tempVar ? <Outlet /> : <Navigate to={routesTypes.HOME} />
}
