import React from "react";
import { useRecoilValue } from "recoil";
import { roomState } from "../../../recoil/roomState";
import HoverResult from "../HoverResult";
import Oneinput from "../Oneinput";
import OneResult from "../OneResult";

export default function RightForm({ roomId, roomData, color }) {
  const mode = useRecoilValue(roomState).mode;
  console.log(mode);
  return (
    <>
      {mode === 0 ? (
        <OneResult groupId={roomId} roomData={roomData} />
      ) : mode === 1 ? (
        <HoverResult />
      ) : mode === 2 ? (
        <Oneinput groupId={roomId} roomData={roomData} />
      ) : null}
    </>
  );
}
