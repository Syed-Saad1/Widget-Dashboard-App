import React from "react";
import { RxCross2 } from "react-icons/rx";

import CloseIcon from "../assets/close.png";
import { useFormik } from "formik";
import { GitProfileSchema } from "../yupSchema/FormValidation";
import { useWidgetContext } from "../hooks/usewidgetContext.js";
const initialValues = {
  username: "",
};
export default function ConfigureGitHub({ onClose }) {
  const { getGithubProfile, isLoading } = useWidgetContext();
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: GitProfileSchema,
    onSubmit: async (values, action) => {
      await getGithubProfile(values.username);
      action.resetForm();
      setTimeout(() => {
        onClose();
      }, 0);
    },
  });
  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/40 "
      >
        <form onSubmit={handleSubmit} autoComplete="off">
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-53.5 w-130 bg-[#ffffff] shadow-2xl rounded-3xl px-6 py-6"
          >
            <div className="flex justify-between items-center ">
              <h1 className="text-[19px] font-medium text-[#000000]">
                Configure GitHub Profile
              </h1>
              <button
                onClick={onClose}
                type="button"
                className=" cursor-pointer"
              >
                <RxCross2 size={24} />
              </button>
            </div>

            <div>
              <h2 className="font-bold text-[14px] text-[#000000] pt-2">
                GitHub Username
              </h2>
              <input
                className="w-118 h-10.5 mt-1 px-3 py-2 text-[16px] font-[Inter,Poppins,sans-serif]  rounded-2xl outline-none border-2 border-[#38B1A1]"
                type="text"
                placeholder="Enter your Username"
                name="username"
                value={values.username}
                id=""
                onChange={handleChange}
              />
              <p className="text-[10px] text-[#fb2c2c] pt-1">
                {errors.username}
              </p>
              <button
                type="submit"
                className="w-118 h-10.5 bg-[#38B1A1] rounded-2xl mt-2 text-center text-[16px]  text-[#ffffff] cursor-pointer"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
