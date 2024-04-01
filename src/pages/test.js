import { contactConstants } from "@/action/contact.constants";
import { useAppSelector } from "@/hooks";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Test() {
  const val = useSelector((state) => state.contact);
  const ss = useAppSelector((state) => state.contact);
  console.log({ ss });
  const dispatch = useDispatch();
  console.log(val);
  const handleNameChange = (e) => {
    dispatch({
      type: contactConstants.INPUT_USER_NAME,
      payload: e.target.value,
    });
  };
  return (
    <div>
      <input
        className="text-black"
        type="text"
        value={val.user.userName}
        placeholder="yo.."
        onChange={handleNameChange}
      />
    </div>
  );
}

export default Test;
