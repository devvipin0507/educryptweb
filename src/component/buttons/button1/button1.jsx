import React, { useMemo } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdModeEdit } from "react-icons/md";
import { TfiDownload } from "react-icons/tfi";

const Button1 = ({
  value,
  handleClick,
  disable,
  adClass,
  data,
  classCustom,
}) => {
  // console.log('value', value)
  const defaultValue = useMemo(() => "View All Current Affair", []);
  const defaultValue1 = useMemo(() => "Edit", []);
  const defaultValue2 = useMemo(() => "Download", []);

  return (
    <>
      <button
        className={`m-0 btn userBtn  ${
          classCustom ? classCustom : ""
        } text-decoration-none ${
          data ? (data == 0 ? "w-100" : "w-40 p-0") : "w-100"
        } ${value?.prices?.length > 0 && "w-100"} ${adClass ? "active" : ""}`}
        onClick={handleClick}
        disabled={disable}
        style={data === 0 ? { padding: "0px" } : {}}
      >
        {value === defaultValue1 && <MdModeEdit className="me-1" />}
        {value} {value === defaultValue && <HiOutlineArrowNarrowRight />}
        {value == defaultValue2 && <TfiDownload />}
      </button>
    </>
  );
};

export default Button1;
