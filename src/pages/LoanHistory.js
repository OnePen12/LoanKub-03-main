const LoanHistory = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start pt-5 px-0 pb-0 box-border gap-[17px] text-left text-sm text-black1 font-inter">
      <header className="w-[324px] flex flex-col items-center justify-start text-center text-xl text-black font-inter">
        <div className="relative font-medium inline-block w-[188px]">
          รายการกู้ยืมย้อนหลัง
        </div>
      </header>
      <div className="flex flex-col items-center justify-start relative gap-[10px]">
        <div className="relative rounded-8xs bg-gainsboro [backdrop-filter:blur(4px)] w-[303px] h-12 z-[0]" />
        <button className="cursor-pointer [border:none] py-[11px] px-7 bg-darkorange-100 my-0 mx-[!important] absolute top-[4px] left-[168.5px] rounded-8xs [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-center justify-start z-[1]">
          <div className="relative text-base font-medium font-inter text-white text-left">
            เสร็จสิ้นแล้ว
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[11px] px-3 bg-gainsboro my-0 mx-[!important] absolute top-[4px] left-[4.5px] rounded-8xs [backdrop-filter:blur(4px)] w-[130px] overflow-hidden flex flex-row items-center justify-center box-border z-[2]">
          <div className="relative text-base font-medium font-inter text-gray-500 text-left">
            กำลังดำเนินการ
          </div>
        </button>
      </div>
      <div className="rounded-t-3xs rounded-b-none box-border h-[600px] flex flex-col items-center justify-start py-[15px] px-3 gap-[20px] border-[1px] border-solid border-gray-800">
        <div className="relative rounded-8xs bg-white [backdrop-filter:blur(4px)] box-border w-[336px] h-[108px] border-[1px] border-solid border-darkorange-200">
          <div className="absolute top-[19px] left-[23px] w-[200px] h-[70px]">
            <div className="absolute top-[0px] left-[0px] font-light">
              <span>เลขที่สัญญา</span>
              <span className="text-xs"> : 123456789</span>
            </div>
            <div className="absolute top-[35px] left-[0px] font-light font-poppins text-gray-400 text-4xs">
              <span>{`วันที่ทำการกู้ยืม : 02 `}</span>
              <span className="text-2xs">ม.ค.</span>
              <span> 2565</span>
            </div>
          </div>
          <div className="absolute top-[26px] left-[235px] text-base font-medium text-darkorange-100">
            200,000.00
          </div>
        </div>
        <div className="relative rounded-8xs bg-white [backdrop-filter:blur(4px)] box-border w-[336px] h-[108px] text-base text-darkorange-100 border-[1px] border-solid border-gray-200">
          <div className="absolute top-[28px] left-[245px] font-medium">
            50,000.00
          </div>
          <div className="absolute top-[18px] left-[23px] w-[200px] h-[70px] text-4xs text-gray-400 font-poppins">
            <div className="absolute top-[35px] left-[0px] font-light">
              <span>{`วันที่ทำการกู้ยืม : 19 `}</span>
              <span className="text-2xs">มี.ค.</span>
              <span> 2564</span>
            </div>
            <div className="absolute top-[0px] left-[0px] font-light font-inter text-black1 text-sm">
              <span>เลขที่สัญญา</span>
              <span className="text-xs"> : 123456781</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanHistory;
