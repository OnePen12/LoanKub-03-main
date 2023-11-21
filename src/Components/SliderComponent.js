// SliderComponent.js
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderComponent = ({ onChange, value }) => {
  const maxSliderValue = 12;
  const remainingValue = maxSliderValue - (value || 0);

  const highlightStyle = { color: '#FFA07A' };

  return (
    <div className="discrete-slider mt-4 w-full">
      <Slider
        className="w-full h-4 bg-gray-800"
        handleStyle={{
          borderColor: '#ff8c00',
          backgroundColor: '#ff8c00',
        }}
        trackStyle={{
          backgroundColor: '#ff8c00',
        }}
        railStyle={{
          backgroundColor: '#f0f0f0',
        }}
        min={0}
        max={maxSliderValue}
        step={1}
        marks={{}}
        defaultValue={value || 0}
        onChange={onChange}
      />
      <div className="slider-value text-darkorange-100 font-poppins mt-2 flex justify-between">
        <div style={{ color: 'gray', flex: '1' }}>
          ชำระ: <span style={value !== undefined ? highlightStyle : {}}>{`${value || 0} งวด`}</span>
        </div>
        <div style={{ color: 'gray', flex: '1', textAlign: 'right' }}>
          คงเหลือ: <span style={remainingValue !== undefined ? highlightStyle : {}}>{`${remainingValue < 0 ? 0 : remainingValue} งวด`}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
