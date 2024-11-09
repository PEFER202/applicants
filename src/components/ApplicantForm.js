import React, { useState, useEffect, useContext } from "react";
import { ApplicantContext } from "../context/ApplicantContext";
import { Form, Button } from "react-bootstrap";
import { addApplicant } from "../services/applicantService";

const ApplicantForm = ({ onSave, editingApplicant }) => {
  const { dispatch } = useContext(ApplicantContext);
  const [applicant, setApplicant] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    education: [
      {
        degree: "",
        institution: "",
        yearOfGraduation: "",
      },
    ],
    workExperience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: [],
      },
    ],
    skills: [],
  });

  useEffect(() => {
    if (editingApplicant) {
      setApplicant(editingApplicant);
    }
  }, [editingApplicant]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingApplicant) {
      onSave(applicant);
    } else {
      const newApplicant = await addApplicant(applicant);
      dispatch({ type: "ADD_APPLICANT", payload: newApplicant });
    }
    setApplicant({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
      },
      education: [
        {
          degree: "",
          institution: "",
          yearOfGraduation: "",
        },
      ],
      workExperience: [
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          responsibilities: [],
        },
      ],
      skills: [],
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={applicant.firstName}
          onChange={(e) =>
            setApplicant({ ...applicant, firstName: e.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          value={applicant.lastName}
          onChange={(e) =>
            setApplicant({ ...applicant, lastName: e.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={applicant.email}
          onChange={(e) =>
            setApplicant({ ...applicant, email: e.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={applicant.phone}
          onChange={(e) =>
            setApplicant({ ...applicant, phone: e.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Street Address</Form.Label>
        <Form.Control
          type="text"
          value={applicant.address.street}
          onChange={(e) =>
            setApplicant({
              ...applicant,
              address: { ...applicant.address, street: e.target.value },
            })
          }
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          value={applicant.address.city}
          onChange={(e) =>
            setApplicant({
              ...applicant,
              address: { ...applicant.address, city: e.target.value },
            })
          }
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          value={applicant.address.state}
          onChange={(e) =>
            setApplicant({
              ...applicant,
              address: { ...applicant.address, state: e.target.value },
            })
          }
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          value={applicant.address.zipCode}
          onChange={(e) =>
            setApplicant({
              ...applicant,
              address: { ...applicant.address, zipCode: e.target.value },
            })
          }
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Degree</Form.Label>
        <Form.Control
          type="text"
          value={applicant.education[0].degree}
          onChange={(e) =>
            setApplicant({
              ...applicant,
              education: [
                { ...applicant.education[0], degree: e.target.value },
              ],
            })
          }
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Institution</Form.Label>
        <Form.Control
          type="text"
          value={applicant.education[0].institution}
          onChange={(e) =>
            setApplicant({
              ...applicant,
              education: [
                { ...applicant.education[0], institution: e.target.value },
              ],
            })
          }
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Year of Graduation</Form.Label>
        <Form.Control
          type="text"
          value={applicant.education[0].yearOfGraduation}
          onChange={(e) =>
            setApplicant({
              ...applicant,
              education: [
                { ...applicant.education[0], yearOfGraduation: e.target.value },
              ],
            })
          }
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Skills (comma-separated)</Form.Label>
        <Form.Control
          type="text"
          value={applicant.skills.join(", ")}
          onChange={(e) =>
            setApplicant({
              ...applicant,
              skills: e.target.value.split(",").map((skill) => skill.trim()),
            })
          }
        />
      </Form.Group>

      <Button type="submit">
        {editingApplicant ? "Save" : "Add Applicant"}
      </Button>
    </Form>
  );
};

export default ApplicantForm;
