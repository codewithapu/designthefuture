// components/TicketApplicationForm.tsx
import React, { useState } from 'react';
import QRCodeDisplay from './QRCodeDisplay';
const TicketApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    tshirtSize: '',
  });

  const [qrCodeData, setQRCodeData] = useState(''); // Store the QR code data

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Replace the following with your actual form submission and QR code generation logic
  
      // 1. Save form data to the server (e.g., using an API endpoint)
      // Replace 'your-api-endpoint' with the actual endpoint URL
      const response = await fetch('/api/your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Form submission was successful.
        // You can handle success cases like displaying a success message or redirecting the user.
      } else {
        // Form submission failed.
        // Handle the error (e.g., display an error message to the user).
      }
  
      // 2. Generate a QR code using the entered name
      // Replace this with your actual QR code generation logic
      const generatedQRCodeData = formData.name; // Use entered name for simplicity
  
      // Set the generated QR code data to display it
      setQRCodeData(generatedQRCodeData);
    } catch (error) {
      console.error('Error handling form submission:', error);
      // Handle any unexpected errors that might occur during the form submission process.
    }
  };
  

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
          placeholder="Contact Number"
        />
        <input
          type="text"
          name="tshirtSize"
          value={formData.tshirtSize}
          onChange={handleInputChange}
          placeholder="T-shirt Size"
        />
        <button onClick={handleSubmit}>Apply for Ticket</button>
      </form>
      {qrCodeData && <QRCodeDisplay qrCodeData={qrCodeData} />}
    </div>
  );
};

export default TicketApplicationForm;
