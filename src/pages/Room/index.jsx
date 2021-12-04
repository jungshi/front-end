import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RightForm, RoomResult } from "../../components/Room";
import { getRoomApi } from "../../utils/roomApi";

export default function Room() {
  const { roomId } = useParams();
  const [color, setColor] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [roomData, setRoomData] = useState({});
  console.log(roomId);
  const settingRoom = (data) => {
    setRoomData(data);
  };
  const settingColor = (data) => {
    setColor(data);
  };
  const getRoomData = async () => {
    await getRoomApi(roomId)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setRoomData(data);
        settingRoom(data);
        console.log(roomData);
        const newC = [];
        const space =
          data.avails_max_count === 0 ? 0 : 255 / data.avails_max_count;
        console.log(space);
        for (var i = 0; i <= data.avails_max_count; i++) {
          newC.push(
            "#0044FF" +
              ("00" + String(parseInt(0 + i * space).toString(16))).slice(-2)
          );
        }
        settingColor(newC);
        setLoading(false);
      })
      .then(() => {
        console.log(roomData);
      })
      .catch((err) => err);
  };
  useEffect(() => {
    getRoomData();
    console.log(roomData, color);
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <RoomResult roomId={roomId} roomData={roomData} color={color} />
      <RightForm roomId={roomId} roomData={roomData} color={color} />
    </>
  );
}
