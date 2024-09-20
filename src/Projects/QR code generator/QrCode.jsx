import React, { useState } from "react";

const QrCode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("https://example.com/");
    const [qrSize, setQrSize] = useState("150");

    const generateQrCode = async () => {
        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        } catch (error) {
            console.error("Error generating QR code", error);
        } finally {
            setLoading(false);
        }
    }

    const downloadQrCode = () => {
        fetch(img)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qr-code.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error("Error downloading QR code", error);
            });
    }

    return (
        <div className="app-container card">
            <h1>QR CODE GENERATOR</h1>
            {loading && <p>Please wait...</p>}
            {img && <img src={img} alt="" className="qr-code-image" />}
            <div>
                <label htmlFor="dataInput" className="input-label">
                    Data for QR code:
                </label>
                <input
                    type="text"
                    id="dataInput"
                    placeholder="Enter data for QR code"
                    value={qrData}
                    onChange={(e) => setQrData(e.target.value)}
                />
                <label htmlFor="sizeInput" className="input-label">
                    Image size (e.g., 150):
                </label>
                <input
                    type="text"
                    id="sizeInput"
                    placeholder="Enter image size"
                    value={qrSize}
                    onChange={(e) => setQrSize(e.target.value)}
                />
                <button
                    className="generate-button"
                    onClick={generateQrCode}
                    disabled={loading}
                >
                    {loading ? "Generating..." : "Generate QR Code"}
                </button>
                <button
                    className="download-button"
                    onClick={downloadQrCode}
                    disabled={!img}
                >
                    Download QR Code
                </button>
            </div>
        </div>
    )
}

export default QrCode

