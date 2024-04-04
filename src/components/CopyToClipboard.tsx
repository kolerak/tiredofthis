'use client';
import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import Swal from 'sweetalert2';  

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    clipboardCopy(text);
    setIsCopied(true);

    // Show SweetAlert2 Success Message with copied text
    Swal.fire({
      title: 'Başarılı!',
      text: `Kopyalanan: ${text}`, // Include the copied text
      icon: 'success',
      timer: 2000, // Adjust timer as needed
      showConfirmButton: false,
    });

    setTimeout(() => setIsCopied(false), 1500); 
  };

  return (
    <button onClick={handleClick}>
      {isCopied ? 'Kopyalandı!' : '(Tıkla!)'}
    </button>
  );
};

export default CopyToClipboard;
