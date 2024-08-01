import React, { useState, useCallback } from 'react';
import QrReader from 'react-qr-scanner';

const Scaner = () => {
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState('No result');

  const handleScan = useCallback((data) => {
    if (data) {
        console.log(data);
        setResult(data.text || JSON.stringify(data));
    }
  }, []);

  const handleError = useCallback((err) => {
    console.error(err);
  }, []);

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </div>
  );
}

export default Scaner;
