import React from 'react';

const Scorecard = () => {
  const scores = [
    { label: 'GPA', goal: 3.8, actual: 3.9 },
    { label: 'ACT', goal: 30, actual: 25 },
    { label: 'SAT', goal: 1300, actual: 1250 },
  ];

  return (
    <div className="card">
      <h2>Scorecard</h2>
      <ul>
        {scores.map((score) => (
          <li key={score.label}>
            {score.label}: Goal {score.goal}, Actual {score.actual}
          </li>
        ))}
      </ul>
      <p><strong>Overall Score:</strong> 81</p>
    </div>
  );
};

export default Scorecard;
