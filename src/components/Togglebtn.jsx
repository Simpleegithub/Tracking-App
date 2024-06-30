import React, { useState } from 'react';

function Togglebtn({ color, isChecked }) {
  const [checked, setChecked] = useState(isChecked);

  const handleCheckboxChange = () => {
    setChecked(!checked); // Toggle the checked state
  };

  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <div
        className={`relative w-11 h-6 bg-gray-200 rounded-full peer ${
          color === 'dark' ? 'dark:bg-gray-700' : ''
        } ${checked ? `peer-checked:bg-${color === 'dark' ? 'gray-600' : color}-600` : ''} peer-focus:ring-4 ${
          color === 'dark' ? `dark:peer-focus:ring-${color}-800` : `peer-focus:ring-${color}-300`
        } peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
          color === 'dark' ? 'dark:border-gray-600' : ''
        }`}
      ></div>
    
    </label>
  );
}

export default Togglebtn;
