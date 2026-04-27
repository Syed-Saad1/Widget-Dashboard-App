import React from "react";
import CloseIcon from "../assets/close.png";
import { StackOverFlow } from "../yupSchema/FormValidation";
import { useFormik } from "formik";
import { GetstackFlow } from "../constant/apis";
const initialValues = {
  userID: "",
};
export default function ConfigureStackOverflowSummury({ onClose }) {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: StackOverFlow,
    onSubmit: async (values, action) => {
      console.log("VAL:", values);
      await GetstackFlow(values.userID);
      action.resetForm();
      onClose();
    },
  });

  console.log("VAL:", errors);
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
                Configure StackOverflow Summury
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
                StackOverflow User ID
              </h2>
              <input
                className="w-118 h-10.5 mt-1 px-3 py-2 text-[16px] font-[Inter,Poppins,sans-serif]  rounded-2xl outline-none border-2 border-[#38B1A1]"
                type="number"
                placeholder=""
                name="userID"
                id=""
                value={values.userID}
                onChange={handleChange}
              />
              <p className="text-[10px] text-[#6b6767] font-[Inter,Poppins,sans-serif] pt-1">
                Find your ID in your SO profile URL
              </p>
              <p className="text-[10px] text-[#fb2c2c] font-[Inter,Poppins,sans-serif] pt-1">
                {errors.userID}
              </p>
              <button
                type="submit"
                className="w-118 h-10.5 bg-[#38B1A1] rounded-2xl mt-2 text-center text-[16px] font-[Inter,Poppins,sans-serif] text-[#ffffff] cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
