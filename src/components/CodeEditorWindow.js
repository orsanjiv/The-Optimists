import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { navLinks } from "../constants/navbar";

import {PiFolderOpen} from 'react-icons/pi'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiGitBranch} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {RiAccountCircleLine} from 'react-icons/ri'
import {BsFillXDiamondFill} from 'react-icons/bs'



const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (

    <main>
    <div className="p-2 bg-gray-600 w-full flex gap-4">

      <BsFillXDiamondFill size={22} style={{ color: 'skyblue' }}/>
      <ul className="flex ">
        {navLinks.map((nav,index) => (
          <li
            key = {nav.id}
            className="hover:bg-gray-700 px-2 py-1 rounded-lg text-white font-medium"
          >
            <a href="{`#${nav.id}">{nav.title}</a>
          </li>
        ))}
      </ul>

    </div>
    
    <div className="overlay overflow-hidden w-full h-full flex">

      <div className="flex flex-col bg-gray-600 px-2 py-2 justify-between border-t-[1px] border-gray-800">

        <div className="space-y-2">
          <PiFolderOpen size={25}/>
          <AiOutlineSearch size={25}/>
          <BiGitBranch size={25}/>
        </div>

        <div className="space-y-2">
          <FiSettings size={25}/>
          <RiAccountCircleLine size={25}/>
        </div>

      </div>

      <Editor
        height="100vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
    </main>
  );
};
export default CodeEditorWindow;
