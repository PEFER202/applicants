import React, { createContext, useReducer, useEffect } from "react";
import { applicantReducer, initialState } from "../reducer/applicantReducer";
import { fetchApplicants } from "../services/applicantService";

export const ApplicantContext = createContext();

const ApplicantContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(applicantReducer, initialState);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const patients = await fetchApplicants();
        dispatch({ type: "FETCH_SUCCESS", payload: patients });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    getPatients();
  }, []);

  return (
    <ApplicantContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicantContext.Provider>
  );
};

export default ApplicantContextProvider;
