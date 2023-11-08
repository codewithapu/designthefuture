import React from 'react';
import QRCode from 'react-qr-code'; // Import the QR code library

interface QRCodeDisplayProps {
    qrCodeData: string; // Define the type explicitly
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ qrCodeData }) => {
    return (
        <div>
            <QRCode value={qrCodeData} />
        </div>
    );
};

export default QRCodeDisplay;
