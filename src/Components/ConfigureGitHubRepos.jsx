import React from "react";
import CloseIcon from "../assets/close.png";
import UsernameDropdown from "./DropDownInput";
import { useFormik } from "formik";
import { GitRepoSchema } from "../yupSchema/FormValidation";
const initialValues = {
  username: "",
};
export default function ConfigureGitHubRepos({ onClose }) {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: GitRepoSchema,
    onSubmit: (values, action) => {
      console.log("Val", values);
      action.resetForm();
    },
  });
  console.log("Val", errors);

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/40 "
      >
        <form onSubmit={handleSubmit}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-auto w-130 bg-[#ffffff] shadow-2xl rounded-3xl px-6 py-6"
          >
            <div className="flex justify-between items-center ">
              <h1 className="text-[19px] font-[Inter,Poppins,sans-serif] font-medium text-[#000000]">
                Configure GitHub Repos
              </h1>
              <img
                onClick={onClose}
                className="h-4 w-4 cursor-pointer"
                src={CloseIcon}
                alt=""
              />
            </div>

            <div>
              <h2 className="font-bold text-[14px] font-[Inter,Poppins,sans-serif] text-[#000000] leading-6 pt-2">
                GitHub Username
              </h2>
              <input
                className="w-118 h-10.5 mt-1 px-3 py-2 text-[16px] font-[Inter,Poppins,sans-serif]  rounded-2xl outline-none border-2 border-[#38B1A1]"
                type="text"
                placeholder="Enter your Username"
                name="username"
                id=""
                value={values.username}
                onChange={handleChange}
              />
              <p className="text-[10px] text-[#fb2c2c] font-[Inter,Poppins,sans-serif] pt-1">
                {errors.username}
              </p>
            </div>

            <div>
              <h2 className="font-bold mt-3 text-[14px] font-[Inter,Poppins,sans-serif] text-[#000000] leading-6 pt-2">
                Sort By
              </h2>
              <UsernameDropdown />
            </div>

            <div>
              <h2 className="font-bold mt-3 text-[14px] font-[Inter,Poppins,sans-serif] text-[#000000] leading-6 pt-2">
                Limit
              </h2>
              <input
                className="w-118 h-10.5 mt-1 px-3 py-2 text-[16px] font-[Inter,Poppins,sans-serif]  rounded-2xl outline-none border-2 border-[#38B1A1]"
                type="number"
                placeholder="5"
                name=""
                id=""
              />
            </div>

            <button
              type="submit"
              className="w-118 h-10.5 bg-[#38B1A1] rounded-2xl mt-6 text-center text-[16px] font-[Inter,Poppins,sans-serif] text-[#ffffff] cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
