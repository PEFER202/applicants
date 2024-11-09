export const initialState = {
  applicants: [],
  loading: true,
  error: "",
};

export const applicantReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        applicants: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        applicants: [],
        error: "Something went wrong!",
      };
    case "ADD_APPLICANT":
      return {
        ...state,
        applicants: [...state.applicants, action.payload],
      };
    case "EDIT_APPLICANT":
      return {
        ...state,
        applicants: state.applicants.map((applicant) =>
          applicant.id === action.payload.id ? action.payload : applicant
        ),
      };
    case "DELETE_APPLICANT":
      return {
        ...state,
        applicants: state.applicants.filter(
          (applicant) => applicant.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
