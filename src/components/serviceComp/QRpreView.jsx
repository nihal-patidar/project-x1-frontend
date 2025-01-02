
import React, { useRef } from "react";

const QRpreView = ({ formQr }) => {
  const canvasRef = useRef(null);

  const downloadQr = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "qr-code.png";
      link.click();
    }
  };

  const renderQrToCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas && formQr) {
      const ctx = canvas.getContext("2d");
      const svgElement = new DOMParser().parseFromString(formQr, "image/svg+xml").documentElement;

      const svgData = new XMLSerializer().serializeToString(svgElement);
      const img = new Image();

      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
      };

      img.src = url;
    }
  };

  React.useEffect(() => {
    if (formQr) renderQrToCanvas();
  }, [formQr]);

  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <div className="flex flex-col items-center w-full">
        {formQr ? (
          <div className="flex">
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <div
              style={{ height: "150px", width: "auto" }}
              dangerouslySetInnerHTML={{ __html: formQr }}
            />
            <button
              onClick={downloadQr}
              style={{
                marginLeft: "10px",
                padding: "8px 12px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight : "bold",
                height : "50px"
              }}
            >
              Download QR
            </button>
          </div>
        ) : (
          <p>Loading SVG...</p>
        )}
      </div>
    </div>
  );
};

export default QRpreView;
