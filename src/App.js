import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

const App = () => {
  const [data, setData] = useState('No barcode scanned');
  const [isScanning, setIsScanning] = useState(true);

  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Barcode Scanner Invitation Wedding</h1>
        {isScanning && (
            <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
              <BarcodeScannerComponent
                  width={500}
                  height={500}
                  onUpdate={(err, result) => {
                    if (result) {
                      setData(result.text);
                      setIsScanning(false);
                    } else {
                      setData('No barcode scanned');
                    }
                  }}
              />
            </div>
        )}
        <h3>Scanned Result:</h3>
        <p>{data}</p>
        <button
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => setIsScanning(true)}
        >
          {isScanning ? 'Scanning...' : 'Restart Scanning'}
        </button>
      </div>
  );
};

export default App;
