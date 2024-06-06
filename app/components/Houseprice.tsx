import React, { CSSProperties } from 'react';

const iframeStyles: CSSProperties = {
  height: "100%",
  border: "0",
  position: "absolute",
  top: "32px",
  left: "16px",
  right: "16px"
};

const Houseprice: React.FC = () => {
  return (
    <div className="iframe-container">
      <iframe
        src="https://lookerstudio.google.com/embed/reporting/98d8d49d-105a-4409-b2df-50ba04aa2f57/page/MRB2D"
        style={iframeStyles}
      />
    </div>
  );
};

export default Houseprice;


