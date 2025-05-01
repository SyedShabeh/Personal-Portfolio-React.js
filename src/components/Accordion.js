import React from 'react';

const Accordion = () => {
  const handleToggle = (index) => {
    const details = document.querySelectorAll('.accordion details');
    details.forEach((detail, i) => {
      if (i !== index) detail.removeAttribute('open');
    });
  };

  return (
    <div className="accordion">
      {[1, 2, 3].map((item, index) => (
        <details key={index} onToggle={() => handleToggle(index)}>
          <summary>Question {item}</summary>
          <p>Answer to question {item}</p>
        </details>
      ))}
    </div>
  );
};

export default Accordion;
