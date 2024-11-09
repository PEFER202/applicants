import React, { lazy, useContext, useState } from "react";
import { ApplicantContext } from "../context/ApplicantContext";
import { deleteApplicant, updateApplicant } from "../services/applicantService"; // Import hàm deleteApplicant
// import ApplicantList from './ApplicantList';
// import ApplicantForm from './ApplicantForm';
import DeleteModal from "./DeleteModal";
import { loadWithDelay } from "../utils/loadWithDelay";
const ApplicantList = lazy(() =>
  loadWithDelay(() => import("./ApplicantList"), 2000)
);
const ApplicantForm = lazy(() =>
  loadWithDelay(() => import("./ApplicantForm"), 2000)
);

const ApplicantManagement = () => {
  const { state, dispatch } = useContext(ApplicantContext);
  const [showModal, setShowModal] = useState(false);
  const [deleteApplicantId, setDeleteApplicantId] = useState(null);
  const [editingApplicant, setEditingApplicant] = useState(null); // Thêm trạng thái cho bệnh nhân đang chỉnh sửa

  const handleDelete = (id) => {
    setDeleteApplicantId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    await deleteApplicant(deleteApplicantId);
    dispatch({ type: "DELETE_APPLICANT", payload: deleteApplicantId });
    setShowModal(false);
  };

  const handleEdit = (applicant) => {
    setEditingApplicant(applicant);
  };

  const handleSave = async (updatedApplicant) => {
    const updated = await updateApplicant(updatedApplicant);
    dispatch({ type: "EDIT_APPLICANT", payload: updated });
    setEditingApplicant(null);
  };

  return (
    <div className="patient-management">
      <h2>Applicant Management</h2>
      <ApplicantForm onSave={handleSave} editingApplicant={editingApplicant} />
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <ApplicantList
          applicants={state.applicants}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
      <DeleteModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ApplicantManagement;
