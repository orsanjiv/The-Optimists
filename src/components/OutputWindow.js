import React from "react"; 
import {GrFormClose} from 'react-icons/gr';
import { useState } from 'react';

const OutputWindow = ({ outputDetails }) => {

  const [buttonClass, setButtonClass] = useState('');
  const handleClick = () => {
    setButtonClass("hidden")
  }
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <div className={`h-[50%] ${buttonClass}`}>

    <div className="flex justify-between items-center border-l-[1px] px-2   bg-gray-600 border-gray-40 border-b-[1px]">
      <h1 className="font-medium bg-clip-text text-white 0 p-2">
        Output
      </h1>
      <GrFormClose size={25} className="bg-gray-700 rounded-full  cursor-pointer hover:bg-gray-300" 
      onClick={handleClick}/>
    </div>

      
      <div className="h-full bg-gray-600 border-l-[1px] border-gray-400 text-white font-normal text-sm overflow-y-auto">
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </div>
  );
};

export default OutputWindow;
