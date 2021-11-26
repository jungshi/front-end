import React from "react";
import { mainNewApi } from "../../../utils/mainApi";
import PMainForm from "./PMainForm";

export default function MainForm() {
  const newRoom = async (inputs) => {
    await mainNewApi(inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => err);
  };
  return <PMainForm newRoom={newRoom} />;
}
