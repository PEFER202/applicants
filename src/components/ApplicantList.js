// import React from "react";
// import { Table, Button } from "react-bootstrap";

// const ApplicantList = ({ applicants, onDelete, onEdit }) => {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Address</th>
//           <th>Education</th>
//           <th>Work Experience</th>
//           <th>Skill</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {applicants.map((applicant) => (
//           <tr key={applicant.id}>
//             <td>
//               {applicant.firstName} {applicant.lastName}
//             </td>
//             <td>{applicant.email}</td>
//             <td>{applicant.phone}</td>
//             <td>
//               {applicant.address.street}, {applicant.address.city},{" "}
//               {applicant.address.state}_{applicant.address.zipCode}
//             </td>
//             <td>
//               {applicant.education.degree}, {applicant.education.institution},{" "}
//               {applicant.education.yearOfGraduation}
//             </td>
//             <td>
//               {applicant.workExperience.company},{" "}
//               {applicant.workExperience.position},{" "}
//               {applicant.workExperience.startDate}
//               {"-"}
//               {applicant.workExperience.endDate}
//               {applicants.workExperience.responsibilities.map(
//                 (responsibility, index) => (
//                   <div key={index}>{responsibility}</div>
//                 )
//               )}
//             </td>
//             <td>
//               {applicants.skills.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </td>
//             <td>
//               <Button variant="warning" onClick={() => onEdit(applicant)}>
//                 Edit
//               </Button>{" "}
//               <Button variant="danger" onClick={() => onDelete(applicant.id)}>
//                 Delete
//               </Button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default ApplicantList;

import React from "react";
import { Table, Button } from "react-bootstrap";

const ApplicantList = ({ applicants, onDelete, onEdit }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Education</th>
          <th>Work Experience</th>
          <th>Skill</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {applicants.map((applicant) => (
          <tr key={applicant.id}>
            <td>{applicant.id}</td>
            <td>
              {applicant.firstName} {applicant.lastName}
            </td>
            <td>{applicant.email}</td>
            <td>{applicant.phone}</td>
            <td>
              {applicant.address.street}, {applicant.address.city},{" "}
              {applicant.address.state} {applicant.address.zipCode}
            </td>
            <td>
              {applicant.education.map((edu, index) => (
                <div key={index}>
                  {edu.degree}, {edu.institution}, {edu.yearOfGraduation}
                </div>
              ))}
            </td>
            <td>
              {applicant.workExperience.map((work, index) => (
                <div key={index}>
                  <strong>{work.company}</strong>, {work.position},{" "}
                  {work.startDate} - {work.endDate}
                  {work.responsibilities.map((responsibility, idx) => (
                    <div key={idx}>- {responsibility}</div>
                  ))}
                </div>
              ))}
            </td>
            <td>
              <ul>
                {applicant.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </td>
            <td>
              <Button variant="warning" onClick={() => onEdit(applicant)}>
                Edit
              </Button>{" "}
              <Button variant="danger" onClick={() => onDelete(applicant.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ApplicantList;
