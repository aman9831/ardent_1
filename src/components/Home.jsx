import React from 'react';
const da = 'img/data1.jpg';
const dat = 'img/dat1.png';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="main">
        <div className="left">
          <h3>WHAT IS</h3>
          <h4>Online Exam <b>Panel</b></h4>
          <p>Online exam panel is a web-based tool that enables teachers or corporate trainers to create exams over the internet. Learners & students can access these exams, on the go, from their laptops. tablets and even smartphones making anytime, anywhere learning possible. Using the software, instructors can create online exams, schedule tests and automate reports eliminating manual grading of papers. Some exclusive features are following:</p>
          -Advance Question Management System.<br />
          -Live Classroom Facility for e-Learners.<br />
          -Real-time Exam Monitoring Facility with online assessment.<br />
          -Its Online Revenue Collection System.
        </div>
        <div className="right">
          <img src={da} alt={da} id="s" />
        </div>
      </div>
      <div className="bot">
        <img src={dat} alt={dat} id="bo" />
      </div>
    </div>
  );
};

export default Home;
