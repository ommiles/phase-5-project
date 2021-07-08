import React from "react";
import { useHistory } from "react-router-dom";

export default function GoBackButton() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={goBack} className="">
        Go Back
      </button>
    </div>
  );
}
