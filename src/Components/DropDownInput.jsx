import { useState } from "react";

export default function UsernameDropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const users = ["Recently Update", "Stars", "Names"];

  return (
    <div className="relative w-118">
      {/* Input */}
      <input
        type="text"
        value={value}
        onClick={() => setOpen(!open)}
        readOnly
        placeholder="Recently Update"
        className="w-full h-10.5 mt-1 px-3 py-2 text-[16px] font-[Inter,Poppins,sans-serif] rounded-2xl outline-none border-2 border-[#38B1A1] cursor-pointer"
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-xl mt-1 shadow-lg z-10">
          {users.map((user, index) => (
            <p
              key={index}
              onClick={() => {
                setValue(user);
                setOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {user}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
