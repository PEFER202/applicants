import axios from "axios";

const API_URL = "http://localhost:5000/applicants";

export const fetchApplicants = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addApplicant = async (applicant) => {
  const response = await axios.post(API_URL, applicant);
  return response.data;
};

export const updateApplicant = async (applicant) => {
  const response = await axios.put(`${API_URL}/${applicant.id}`, applicant);
  return response.data;
};

export const deleteApplicant = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
