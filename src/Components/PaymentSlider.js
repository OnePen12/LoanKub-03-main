// PaymentDetailsSection.js
import React, { useState } from 'react';
import SliderCom from './SliderComponent';

const PaymentDetailsSection = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const remainingValue = sliderValue === 12 ? 0 : 12 - sliderValue;

  return (
    <section className="payment-details rounded-3xs flex flex-col items-center justify-center py-[30px] px-[15px] gap-[18px] z-[2] text-left text-base text-black1 font-inter border-[1px] border-solid border-gray-800">
      <div className="status-container flex flex-row items-center justify-center gap-[9px]">
        <div className="status-label relative font-light">สถานะค่างวด:</div>
        <div className="status-badge rounded-8xs bg-darkorange-100 flex flex-row items-center justify-center py-[3px] px-[15px] text-sm text-white">
          <div className="relative font-light">ถึงกำหนดชำระ</div>
        </div>
      </div>

      <SliderCom
        onChange={handleSliderChange}
        value={sliderValue}
        remainingValue={remainingValue}
      />

      <div className="divider relative box-border w-[294px] h-px border-t-[1px] border-solid border-gray-300" />

      <div className="payment-date relative text-gray-400 text-sm">
        <span className="font-light">
          <span>งวดประจำวันที่</span>
          <span className="text-xs font-poppins">{` `}</span>
        </span>
        <span className="text-xs font-poppins">
          <span className="font-medium">04</span>
        </span>
        <span className="font-light">
          <span className="text-xs font-poppins">{` `}</span>
          <span>เม.ย.</span>
          <span className="text-xs font-poppins">{` `}</span>
        </span>
        <span className="text-xs font-poppins">
          <span className="font-medium">2566</span>
        </span>
      </div>

      <div className="total-amount relative text-lg">
        <span className="font-light">
          <span>ยอดที่ต้องชำระ</span>
          <span className="text-base text-darkorange-100 font-poppins">
            <span className="text-tomato-100">{` `}</span>
          </span>
        </span>
        <span className="text-base text-darkorange-100 font-poppins">
          <span className="font-medium">9,473.77</span>
        </span>
        <span className="font-light">
          <span className="text-tomato-100">{` `}</span>
          <span>บาท</span>
        </span>
      </div>
    </section>
  );
};

export default PaymentDetailsSection;
