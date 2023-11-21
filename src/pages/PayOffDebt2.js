const PayOffDebt2 = () => {
  return (
    <div className="relative rounded-11xl bg-white w-full flex flex-col items-center justify-start text-left text-3xl text-black1 font-inter">
      <div className="self-stretch rounded-11xl bg-white overflow-hidden flex flex-col items-center justify-start py-8 px-[9px] gap-[26px] border-t-[1px] border-solid border-gray-800">
        <div className="relative">
          <span className="font-semibold">ยอดที่ต้องชำระ</span>
          <span className="text-tomato-100 text-xl font-poppins">
            <span className="text-base font-light font-inter">{` `}</span>
            <span className="font-medium">9,473.77</span>
            <span className="text-lg font-light font-inter">{` `}</span>
          </span>
          <span className="font-semibold">บาท</span>
        </div>
        <div className="relative text-gray-400 text-sm">
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-lg">
          <div className="relative font-semibold">บัญชีธนาคารปลายทาง</div>
          <div className="self-stretch rounded-8xs bg-gray-700 [backdrop-filter:blur(4px)] flex flex-row items-center justify-between py-[11px] px-[50px] text-smi text-gray-500 border-[1px] border-solid border-tomato-200">
            <img
              className="relative w-[50px] h-[50px] object-cover"
              alt=""
              src="/scbicon-1@2x.png"
            />
            <div className="w-[101px] h-20 overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="relative font-light">ธนาคารไทยพาณิชย์</div>
              <div className="relative text-base font-medium font-poppins text-black1 mt-[-2px]">
                1234567890
              </div>
              <div className="relative font-light text-gray-600 mt-[-2px]">
                โชคดี มีชัย
              </div>
            </div>
          </div>
          <div className="relative font-semibold">หลักฐานการชำระเงิน</div>
          <input
            className="self-stretch rounded-8xs bg-gray-700 [backdrop-filter:blur(4px)] box-border h-12 flex flex-col items-center justify-center border-[1px] border-solid border-gray-800"
            required={true}
            type="file"
          />
          <div className="relative font-semibold">{`จำนวนเงิน `}</div>
          <input
            className="font-medium font-inter text-sm bg-gray-700 self-stretch rounded-8xs [backdrop-filter:blur(4px)] box-border h-12 flex flex-col items-start justify-start py-[15px] px-[19px] border-[1px] border-solid border-gray-800"
            placeholder="ขั้นต่ำ ฿ 9,473.77"
            type="number"
          />
          <div className="self-stretch relative text-[8px] font-medium">
            หมายเหตุ : กรุณาทำการโอนเงินขั้นต่ำเป็นจำนวนที่ระบุไว้
            และสามารถโอนได้มากกว่าจำนวนขั้นต่ำ
          </div>
          <div className="relative font-semibold">วันที่</div>
          <input
            className="font-medium font-inter bg-gray-700 self-stretch rounded-8xs [backdrop-filter:blur(4px)] flex flex-col items-center justify-center py-3.5 px-[136px] border-[1px] border-solid border-gray-800"
            type="text"
          />
          <div className="relative font-semibold">เวลา</div>
          <input
            className="font-medium font-inter bg-gray-700 self-stretch rounded-8xs [backdrop-filter:blur(4px)] flex flex-col items-center justify-center py-3.5 px-[136px] border-[1px] border-solid border-gray-800"
            type="text"
          />
        </div>
        <button
          className="[border:none] py-4 px-[132px] bg-gainsboro self-stretch rounded-3xs flex flex-row items-center justify-center"
          disabled={true}
        >
          <div className="flex-1 relative text-xl leading-[20px] font-semibold font-poppins text-black1 text-center">
            ยืนยัน
          </div>
        </button>
      </div>
    </div>
  );
};

export default PayOffDebt2;
