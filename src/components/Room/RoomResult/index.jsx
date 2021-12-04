import React from "react";
import PRoomResult from "./PRoomResult";

function RoomResult({ roomId, roomData, color }) {
  console.log(roomData, color);
  return (
    <>
      <PRoomResult roomData={roomData} color={color} />
    </>
  );
}
export default React.memo(RoomResult);
