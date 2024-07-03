import React from 'react';
import './css/info.css';

const InfoCard = ({ icon, title, count, bgColor }) => {
  return (
    <div className="info-card" style={{ backgroundColor: bgColor }}>
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default InfoCard;
