import React from "react";
import { useParams } from "react-router";
import { RightForm, RoomResult } from "../../components/Room";

export default function Room() {
  const { roomId } = useParams();
  console.log(roomId);
  return (
    <>
      <RoomResult roomId={roomId} />
      <RightForm />
    </>
  );
}
