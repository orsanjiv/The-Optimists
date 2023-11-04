import React from "react";
import { classnames } from "../utils/general";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      <label className="bg-gray-600 w-full text-white font-medium border-t-[1px] p-2">Input</label>
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        // placeholder={`Input`}
        className={classnames(
          "focus:outline-none w-full border-t-2 border-gray-400 z-10 bg-gray-600 pl-2 text-white"
        )}
      ></textarea>
    </>
  );
};

export default CustomInput;
