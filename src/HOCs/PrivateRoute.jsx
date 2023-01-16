import { useSelector } from "react-redux";
import { selectToken } from "../redux/auth/authSelectors"; // перевірити назву selectToken
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to="/login" />; // перевірити маршрут to = '/login';
};
