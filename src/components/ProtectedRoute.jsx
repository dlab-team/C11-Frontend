import PropTypes from "prop-types"
import { Outlet, Navigate } from "react-router-dom"

export const ProtectedRoute = ({ isAllowed, children, redirectTo = "/" }) => {
  if (!isAllowed) return <Navigate to={redirectTo} />
  return children ? children : <Outlet />
}

ProtectedRoute.propTypes = {
  children: PropTypes.object.isRequired,
  isAllowed: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
}
