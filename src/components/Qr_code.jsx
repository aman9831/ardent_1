import React from 'react';
import QRCode from 'qrcode.react';
import './css/card.css';

const Qr_code = () => {
  const personalInfo = {
    Name: "Aman Shaw",
    DOB: "XX-XX-XXXX",
    Blood_Type: "B+",
    Email: "XXXXX@gmail.com",
    STUDENT_ID: "A91404822050",
    Join_date: "05/01/2022",
    Expires_on: "31/03/2025",
    Department: "IT",
    Designation: "Software Engineer",
    Desk_NO: "UG_99",
    Room_NO: "C78",
  };

  // Create a string with newlines for each key-value pair
  const qrCodeValue = `
    Name: ${personalInfo.Name}
    DOB: ${personalInfo.DOB}
    Blood Type: ${personalInfo.Blood_Type}
    Email: ${personalInfo.Email}
    STUDENT ID: ${personalInfo.STUDENT_ID}
    Join Date: ${personalInfo.Join_date}
    Expires On: ${personalInfo.Expires_on}
    Department: ${personalInfo.Department}
    Designation: ${personalInfo.Designation}
    Desk No: ${personalInfo.Desk_NO}
    Room No: ${personalInfo.Room_NO}
  `;

  return (
    <div className="container_qr">
      <div className="qrcode-container">
        <QRCode value={qrCodeValue.trim()} size={80}/>
      </div>
    </div>
  );
};




export default Qr_code;

