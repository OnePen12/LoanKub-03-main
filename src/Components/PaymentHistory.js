// PaymentHistorySection.js
import React from 'react';

const PaymentHistory = () => {
  return (
    <div>
      <div className="w-[324px] flex flex-row items-center justify-between p-[5px] box-border z-[3] text-xl text-black1">
        <div className="relative font-medium">ประวัติการชำระเงิน</div>
        <div className="w-[60px] flex flex-row items-center justify-between">
          <img className="relative w-6 h-6" alt="" src="/work-history.svg" />
          <img className="relative w-6 h-6" alt="" src="/tune.svg" />
        </div>
      </div>
      <div className="rounded-t-3xs rounded-b-none box-border h-[350px] flex flex-row items-center justify-center py-[155px] px-24 z-[4] text-base text-gray-400 border-[1px] border-solid border-gray-800">
        <div className="relative font-light">ท่านยังไม่มีรายการชำระเงิน</div>
      </div>
    </div>
  );
};

export default PaymentHistory;
