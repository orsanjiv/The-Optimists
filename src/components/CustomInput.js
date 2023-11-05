import React from "react";
import { classnames } from "../utils/general";
import {GrFormClose} from 'react-icons/gr';
import { useState } from 'react';


const CustomInput = ({ customInput, setCustomInput }) => {

  const [buttonClass, setButtonClass] = useState('');

  const handleClick = () => {
    setButtonClass("hidden")
  }
  return (
    <>
      <div className={`flex justify-between items-center bg-gray-600 w-full text-white font-medium border-t-[1px] p-2 ${buttonClass}`}>
        <label className="">Input</label>
        <GrFormClose 
          size={25} 
          className={`bg-gray-700 rounded-full  cursor-pointer hover:bg-gray-300 `}
          onClick={handleClick}
          />
      </div>
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        // placeholder={`Input`}
        className={`focus:outline-none w-full border-t-2 border-gray-400 z-10 bg-gray-600 pl-2 text-white ${buttonClass}`}
      ></textarea>
    </>
  );
};

export default CustomInput;
