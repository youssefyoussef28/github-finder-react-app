import React from "react";
import spinner from "../layout/assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img width={180} src={spinner} alt="" className="text-center mx-auto" />
    </div>
  );
}

export default Spinner;
