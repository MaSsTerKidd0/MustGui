import React, { useEffect, useState } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import fetchWithToken from "../../hooks/useFetchWithToken";

const ProtectedRoute = ({ component: Component, authRoute, path, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the authentication token from local storage
    const token = localStorage.getItem("authToken");

    // Check if the token is available
    if (!token) {
      console.error("Authentication token not found");
      navigate("/login");
      return;
    }

    const checkAuthentication = async () => {
      try {
        // Fetch data from the protected endpoint using the path prop
        const response = await fetchWithToken(
          `http://127.0.0.1:8080${path}`,
          {}
        );

        // Check if the response body indicates successful authentication
        if (response.body === "Access granted") {
          setIsAuthenticated(true);
          navigate(`${path}/`, { replace: true });
        } else {
          setIsAuthenticated(false);
          navigate("/dashboard", { replace: true });
        }
      } catch (error) {
        setIsAuthenticated(false);
        navigate("/dashboard", { replace: true });
      }
    };

    checkAuthentication();
  }, [path, navigate]);

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to={authRoute} replace />
  );
};

export default ProtectedRoute;
