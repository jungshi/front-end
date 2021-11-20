import React from "react";
import { useRecoilValue } from "recoil";
import { roomState } from "../../../recoil/roomState";
import HoverResult from "../HoverResult";
import OneResult from "../OneResult";

export default function RightForm() {
  const mode = useRecoilValue(roomState);

  return <>{mode === 0 ? <OneResult /> : <HoverResult />}</>;
}
