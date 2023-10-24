import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  loggedIn: boolean;
  isBlockedForAuthUser?: boolean;
  children: React.ReactNode;
}

const ProtectedRouteElement = ({ loggedIn, isBlockedForAuthUser = false, children }: ProtectedRouteProps) => {
  return loggedIn ? (
    !isBlockedForAuthUser ? (
      children
    ) : (
      <Navigate to="/" replace />
    )
  ) : isBlockedForAuthUser ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRouteElement;
