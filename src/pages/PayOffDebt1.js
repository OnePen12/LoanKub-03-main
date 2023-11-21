import React, { useState } from 'react';
import PaymentSlider from '../Components/PaymentSlider';
import PayOffDebt6 from './PayOffDebt2';
import PaymentHistory from '../Components/PaymentHistory';

const PayOffDebt1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    // Show the modal when the button is clicked
    setIsModalVisible(true);

    // Disable body scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    // Close the modal when needed
    setIsModalVisible(false);

    // Enable body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      {/* Display the modal */}
      {isModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded-md" style={{ overflowY: 'auto', maxHeight: '80vh', zIndex: 1000 }}>
            {/* Content of your modal (using PayOffDebt6 component) */}
            <PayOffDebt6 onClose={handleModalClose} />
            {/* Use an arrow-left icon or any other icon for closing */}
            <button
              className="text-darkorange-100 bg-transparent cursor-pointer"
              onClick={handleModalClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Display the rest of the content when the modal is closed */}
      {!isModalVisible && (
        <div className="relative bg-white w-full flex flex-col items-center justify-start gap-[17px] text-left text-sm text-gray-100 font-inter">
          <header className="w-[324px] h-[38px] flex flex-col items-center justify-start gap-[15px] z-[0] text-center text-xl text-black font-inter">
            <div className="relative font-semibold inline-block w-[188px]">
              ชำระเงิน
            </div>
            <div className="relative box-border w-10 h-0.5 border-t-[2px] border-solid border-darkorange-100" />
          </header>
          <span className="w-[324px] flex flex-col items-center justify-start z-[1] text-center">
            <div className="self-stretch relative font-light">
              <span>เลขที่สัญญา</span>
              <span className="text-xs"> : 123456789</span>
            </div>
          </span>

          <PaymentSlider />

          <PaymentHistory />

          {/* Scroll button as a circle */}
          <button
            className="fixed bottom-4 right-4 bg-darkorange-100 text-white p-4 rounded-full shadow-md"
            onClick={handleButtonClick}
          >
            {/* You can customize the button content here */}
            แจ้งชำระเงิน
          </button>
        </div>
      )}
    </div>
  );
};

export default PayOffDebt1;