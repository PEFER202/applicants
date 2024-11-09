import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Cập nhật từ Switch sang Routes
import ApplicantContextProvider from "./context/ApplicantContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadWithDelay } from "./utils/loadWithDelay";

const LoginForm = lazy(() =>
  loadWithDelay(() => import("./components/LoginForm"), 2000)
);
const ApplicantManagement = lazy(() =>
  loadWithDelay(() => import("./components/ApplicantManagement"), 2000)
);

function App() {
  return (
    <Router>
      <ApplicantContextProvider>
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {" "}
              <Route path="/" element={<LoginForm />} />{" "}
              <Route path="/applicants" element={<ApplicantManagement />} />{" "}
            </Routes>
          </Suspense>
        </div>
      </ApplicantContextProvider>
    </Router>
  );
}

export default App;
