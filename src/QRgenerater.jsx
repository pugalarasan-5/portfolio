import { useState } from "react";
import './qr.css'
export const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrdata, setQrdata] = useState("https://www.google.com");
  const [size, setSize] = useState(200);
  const [error, setError] = useState(null);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    // eslint-disable-next-line no-unused-vars
    } catch (_) {
      return false;
    }
  };

  async function generateQrCode(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    if (!qrdata) {
      setError("Please enter data for the QR code");
      setLoading(false);
      return;
    }

    if (!isValidUrl(qrdata)) {
      setError("Please enter a valid URL");
      setLoading(false);
      return;
    }

    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrdata)}`;
      setImg(url);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to generate QR code");
      setLoading(false);
    }
  }

  async function downloadQrCode() {
    if (!img) return;

    try {
      const response = await fetch(img);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'qr-code.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading QR code:', error);
      setError('Failed to download QR code');
    }
  }

  const handleSizeChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 200;
    value = Math.max(100, Math.min(1000, value));
    setSize(value);
  };

  return (
   <div className="QR">
     <div className="qr-container">
      <h1>QR Code Generator</h1>
      
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Generating QR Code...</p>}
      
      {img && (
        <img 
          src={img} 
          alt="QR Code" 
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError("Failed to load QR code");
          }}
        />
      )}

      <form onSubmit={generateQrCode}>
        <div className="form-group">
          <label htmlFor="link">
            URL for QR Code:
            <input
              type="url"
              id="link"
              value={qrdata}
              placeholder="Enter valid URL"
              onChange={(e) => setQrdata(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="size">
            QR Code Size (100-1000px):
            <input
              type="number"
              id="size"
              value={size}
              onChange={handleSizeChange}
              min="100"
              max="1000"
              required
            />
          </label>
        </div>

        <div className="button-group">
          <button type="submit" className="generate-btn" disabled={loading}>
            {loading ? 'Generating...' : 'Generate QR Code'}
          </button>
          <button 
            type="button" 
            className="download-btn" 
            onClick={downloadQrCode}
            disabled={!img || loading}
          >
            Download
          </button>
        </div>
      </form>

      <footer>
        <p>
          Created by <a href="https://github.com/Abhishek-072">Pugal Arasan</a>
        </p>
      </footer>
    </div>
   </div>
  );
};