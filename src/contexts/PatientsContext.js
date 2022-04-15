import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import AuthContext from "./AuthContext";

const PatientsContext = createContext();

export default PatientsContext;

export function PatientsContextProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authTokens } = useContext(AuthContext);

  const getPatients = async () => {
    if (authTokens) {
      const response = await fetch("http://localhost:8000/api/patients", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setPatients(data);
        setLoading(false);
      } else {
        alert("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getPatients();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [authTokens]);

  const contextData = {
    patients,
    loading,
  };

  return (
    <PatientsContext.Provider value={{ patients, loading }}>
      {children}
    </PatientsContext.Provider>
  );
}
