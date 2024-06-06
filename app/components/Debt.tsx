import React, { CSSProperties } from 'react';

const iframeStyles: CSSProperties = {
  height: "100%",
  border: "0",
  position: "absolute",
  top: "32px",
  left: "16px",
  right: "16px"
};

const Debt: React.FC = () => {
  return (
    <div className="iframe-container">
      <iframe
        src="https://lookerstudio.google.com/embed/reporting/d4d458ff-2978-4734-b4e2-838f889941f3/page/OeQ2D"
        style={iframeStyles}
      />
    </div>
  );
};

export default Debt;


